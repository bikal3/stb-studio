// Post-export assertions.
//
// The static export is only ever exercised with NEXT_PUBLIC_BASE_PATH set in
// CI, so basePath mistakes do not show up in a local build. One shipped: the
// `app/opengraph-image.*` file convention resolves URLs as
// metadataBase + basePath + filename, and because siteConfig.url already ends
// in the basePath, the emitted og:image pointed at `/stb-studio/stb-studio/...`
// and 404'd. Everything else about the build looked healthy.
//
// These checks resolve the absolute URLs in the built HTML back to files on
// disk, so a broken link fails the build instead of the deploy.
//
// Runs from the `postbuild` npm hook, after scripts/prune-export.mjs.

import { readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(fileURLToPath(import.meta.url), '../..')
const EXPORT_DIR = path.join(ROOT, 'out')
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

/**
 * The path portion of siteConfig.url (`/stb-studio`). Absolute metadata URLs
 * always carry it, even in a local build that emits to the export root, so it
 * has to be stripped independently of BASE_PATH. Read by regex rather than
 * imported, since lib/content.ts is TypeScript.
 */
async function sitePrefix() {
  const source = await readFile(path.join(ROOT, 'lib/content.ts'), 'utf8')
  const url = source.match(/url:\s*["']([^"']+)["']/)?.[1]
  if (!url) return ''
  try {
    return new URL(url).pathname.replace(/\/$/, '')
  } catch {
    return ''
  }
}

let SITE_PREFIX = ''

const failures = []

async function exists(target) {
  try {
    await stat(target)
    return true
  } catch {
    return false
  }
}

/** Maps a site-absolute or fully-qualified URL back to its file in `out/`. */
function toExportPath(url) {
  let pathname
  try {
    pathname = new URL(url, 'https://placeholder.invalid').pathname
  } catch {
    return null
  }
  for (const prefix of [SITE_PREFIX, BASE_PATH]) {
    if (prefix && pathname.startsWith(prefix)) {
      pathname = pathname.slice(prefix.length)
      break
    }
  }
  return path.join(EXPORT_DIR, decodeURIComponent(pathname))
}

async function checkMetaAsset(html, pattern, label) {
  const url = html.match(pattern)?.[1]
  if (!url) {
    failures.push(`${label}: tag missing from out/index.html`)
    return
  }
  if (BASE_PATH && url.includes(`${BASE_PATH}${BASE_PATH}`)) {
    failures.push(`${label}: basePath is doubled — ${url}`)
    return
  }
  const file = toExportPath(url)
  if (!file || !(await exists(file))) {
    failures.push(`${label}: ${url} does not resolve to a file in out/`)
  }
}

async function run() {
  const indexPath = path.join(EXPORT_DIR, 'index.html')
  if (!(await exists(indexPath))) {
    console.warn('[verify-export] no out/index.html, skipping')
    return
  }

  SITE_PREFIX = await sitePrefix()
  const html = await readFile(indexPath, 'utf8')

  await checkMetaAsset(html, /<meta property="og:image" content="([^"]+)"/, 'og:image')
  await checkMetaAsset(html, /<meta name="twitter:image" content="([^"]+)"/, 'twitter:image')
  await checkMetaAsset(html, /<link rel="icon" href="([^"]+)"/, 'icon')

  // The canonical points at the deployed origin, so it cannot be resolved to a
  // file — but a doubled basePath is still detectable and always wrong.
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]
  if (!canonical) {
    failures.push('canonical: tag missing from out/index.html')
  } else if (BASE_PATH && canonical.includes(`${BASE_PATH}${BASE_PATH}`)) {
    failures.push(`canonical: basePath is doubled — ${canonical}`)
  }

  if (failures.length) {
    console.error('[verify-export] failed:')
    for (const failure of failures) console.error(`  - ${failure}`)
    process.exit(1)
  }

  console.log(
    `[verify-export] og:image, twitter:image, icon and canonical all resolve (basePath: ${
      BASE_PATH || 'none'
    })`
  )
}

run().catch((err) => {
  console.error('[verify-export] failed:', err)
  process.exit(1)
})
