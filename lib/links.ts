export const BOOKING_EMAIL = 'susmitatamangbomjanstb@gmail.com'

export function whatsappUrl(message?: string): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''
  const base = `https://wa.me/${number}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export function instagramUrl(): string {
  return process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? '#'
}

export function bookingMailtoUrl(
  name: string,
  email: string,
  style: string,
  placement: string,
  message: string
): string {
  const subject = `Tattoo Consultation Request — ${name}`
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Style: ${style}`,
    `Placement: ${placement}`,
    ``,
    `Message:`,
    message,
  ].join('\n')
  return `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
