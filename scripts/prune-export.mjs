// Post-build cleanup.
//
// `output: 'export'` copies all of `public/` into `out/`, including the
// full-resolution source photographs. Nothing ever requests them: every image
// goes through next/image, and lib/imageLoader.ts rewrites each src to a
// pre-generated `/_opt/**.webp` variant. Shipping the originals would add
// ~12MB of dead weight to the deploy and publish the artwork at full print
// resolution, which the site's own footer says it does not permit.
//
// Runs from the `postbuild` npm hook.

import { rm, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(fileURLToPath(import.meta.url), '../..')
const EXPORT_DIR = path.join(ROOT, 'out')
const ORIGINALS = path.join(EXPORT_DIR, 'images')
const VARIANTS = path.join(EXPORT_DIR, '_opt/images')

async function dirSize(dir) {
  const { execSync } = await import('node:child_process')
  try {
    return execSync(`du -sh ${JSON.stringify(dir)}`).toString().split('\t')[0]
  } catch {
    return 'unknown size'
  }
}

async function exists(target) {
  try {
    await stat(target)
    return true
  } catch {
    return false
  }
}

async function run() {
  if (!(await exists(EXPORT_DIR))) {
    console.warn('[prune-export] no out/ directory, skipping')
    return
  }

  // Refuse to strip the originals unless the optimised variants that replace
  // them are actually present — otherwise a failed optimiser run would ship a
  // site with no images at all.
  if (!(await exists(VARIANTS))) {
    console.warn('[prune-export] out/_opt/images missing — keeping originals')
    return
  }

  if (!(await exists(ORIGINALS))) {
    console.log('[prune-export] nothing to prune')
    return
  }

  const size = await dirSize(ORIGINALS)
  await rm(ORIGINALS, { recursive: true, force: true })
  console.log(`[prune-export] removed unreferenced originals from out/images (${size})`)
}

run().catch((err) => {
  console.error('[prune-export] failed:', err)
  process.exit(1)
})
