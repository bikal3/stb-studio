export function whatsappUrl(message?: string): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''
  const base = `https://wa.me/${number}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export function instagramUrl(): string {
  return process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? '#'
}
