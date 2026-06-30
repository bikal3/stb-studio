// Build-time image optimizer.
//
// `output: 'export'` ships a fully static site, so there is no Next.js image
// server to resize images at request time. Instead we pre-generate resized
// WebP variants here and serve them via lib/imageLoader.ts. Runs from the
// `prebuild`/`predev` npm hooks.

import { readdir, mkdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = path.resolve(fileURLToPath(import.meta.url), '../..')
const SRC_DIR = path.join(ROOT, 'public/images')
const OUT_DIR = path.join(ROOT, 'public/_opt/images')

// Must stay in sync with WIDTHS in lib/imageLoader.ts.
const WIDTHS = [384, 640, 1080, 1600]
const QUALITY = 75
const RASTER = /\.(jpe?g|png)$/i

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...(await walk(full)))
    else if (RASTER.test(entry.name)) files.push(full)
  }
  return files
}

async function isUpToDate(srcPath, outPath) {
  try {
    const [src, out] = await Promise.all([stat(srcPath), stat(outPath)])
    return out.mtimeMs >= src.mtimeMs
  } catch {
    return false
  }
}

async function run() {
  let sources
  try {
    sources = await walk(SRC_DIR)
  } catch {
    console.warn(`[optimize-images] no source dir at ${SRC_DIR}, skipping`)
    return
  }

  let generated = 0
  let skipped = 0
  for (const srcPath of sources) {
    const rel = path.relative(SRC_DIR, srcPath)
    for (const width of WIDTHS) {
      const outPath = path.join(OUT_DIR, `${rel}.${width}.webp`)
      if (await isUpToDate(srcPath, outPath)) {
        skipped++
        continue
      }
      await mkdir(path.dirname(outPath), { recursive: true })
      await sharp(srcPath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outPath)
      generated++
    }
  }
  console.log(
    `[optimize-images] ${sources.length} sources, ${generated} variants written, ${skipped} up-to-date`,
  )
}

run().catch((err) => {
  console.error('[optimize-images] failed:', err)
  process.exit(1)
})
