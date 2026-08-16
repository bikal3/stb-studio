export const BOOKING_EMAIL = 'stbstudio.np@gmail.com'

/** E.164, for `tel:` links and structured data. */
export const STUDIO_PHONE = '+9779841234567'
/** Grouped the way a Nepali mobile number is normally written. */
export const STUDIO_PHONE_DISPLAY = '+977 984-123-4567'

export function whatsappUrl(message?: string): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''
  const base = `https://wa.me/${number}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export function instagramUrl(): string {
  return process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? '#'
}

export function facebookUrl(): string {
  return process.env.NEXT_PUBLIC_FACEBOOK_URL ?? '#'
}

export function tiktokUrl(): string {
  return process.env.NEXT_PUBLIC_TIKTOK_URL ?? '#'
}

export function bookingMailtoUrl(
  name: string,
  email: string,
  style: string,
  placement: string,
  days: string,
  message: string
): string {
  const subject = `Tattoo Consultation Request — ${name}`
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Style: ${style}`,
    `Placement: ${placement}`,
    `Preferred days: ${days}`,
    ``,
    `Message:`,
    message,
  ].join('\n')
  return `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
