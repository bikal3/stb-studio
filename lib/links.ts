export const BOOKING_EMAIL = "stbstudio.np@gmail.com";

/** E.164, for `tel:` links and structured data. */
export const STUDIO_PHONE = "+9779762111193";
/** Grouped the way a Nepali mobile number is normally written. */
export const STUDIO_PHONE_DISPLAY = "+977 9762111193";

export function whatsappUrl(message?: string): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
  const base = `https://wa.me/${number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/** The studio's Google Maps listing, for "directions" links and structured data. */
export const MAP_URL = "https://maps.app.goo.gl/t3GnFxZAFMDacN9g6";
/** Keyless iframe embed. The query resolves to the same listing as MAP_URL. */
export const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=STB%20Tattoo%20Studio%2C%20Dhara%20Galli%2C%20Kathmandu&output=embed";

/** `#` when unset, so an unconfigured social link renders but goes nowhere. */
export const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "#";
export const FACEBOOK_URL = process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "#";
export const TIKTOK_URL = process.env.NEXT_PUBLIC_TIKTOK_URL ?? "#";

export function bookingMailtoUrl(
  name: string,
  email: string,
  style: string,
  placement: string,
  days: string,
  message: string,
): string {
  const subject = `Tattoo Consultation Request — ${name}`;
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Style: ${style}`,
    `Placement: ${placement}`,
    `Preferred days: ${days}`,
    ``,
    `Message:`,
    message,
  ].join("\n");
  return `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
