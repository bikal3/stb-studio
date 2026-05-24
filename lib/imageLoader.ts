export default function imageLoader({ src, width }: { src: string; width: number }): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  return `${base}${src}?w=${width}`
}
