// Static-export image loader. Maps a source path like `/images/foo/bar.jpg`
// to a pre-generated WebP variant produced by scripts/optimize-images.mjs,
// e.g. `/_opt/images/foo/bar.jpg.640.webp`. Picks the smallest variant whose
// width is at least the requested width.

// Must stay in sync with WIDTHS in scripts/optimize-images.mjs.
const WIDTHS = [384, 640, 1080, 1600]

function pickWidth(requested: number): number {
  return WIDTHS.find((w) => w >= requested) ?? WIDTHS[WIDTHS.length - 1]
}

export default function imageLoader({ src, width }: { src: string; width: number }): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const variant = pickWidth(width)
  // Encode each path segment so filenames with spaces survive in srcset.
  const encoded = src.split('/').map(encodeURIComponent).join('/')
  return `${base}/_opt${encoded}.${variant}.webp`
}
