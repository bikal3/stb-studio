import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { whatsappUrl, instagramUrl, facebookUrl, tiktokUrl, BOOKING_EMAIL } from '@/lib/links'
import { siteConfig, openingHours } from '@/lib/content'

const socials = [
  {
    label: 'Instagram',
    href: instagramUrl,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: facebookUrl,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: tiktokUrl,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: whatsappUrl,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
    ),
  },
]

const explore = [
  { href: '/gallery', label: 'Gallery' },
  { href: '/artists', label: 'Artists' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/aftercare', label: 'Aftercare' },
  { href: '/book', label: 'Book a Consult' },
]

const columnHeading = 'text-eyebrow uppercase font-sans font-medium text-accent'
const quietLink =
  'font-sans text-[0.9375rem] text-mist transition-colors duration-300 hover:text-warm-white'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="surface-ink border-t border-ink-soft">
      <Container className="py-[clamp(3rem,6vw,5rem)]">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="relative block h-11 w-11 flex-shrink-0 overflow-hidden rounded-full border border-warm-white/20">
                <Image
                  src="/images/logo-main.png"
                  alt="STB Studio"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </span>
              <span>
                <span className="block text-[0.8125rem] tracking-[0.22em] uppercase font-sans text-warm-white">
                  {siteConfig.name}
                </span>
                <span className="mt-1 block font-sans text-[0.75rem] text-mist">
                  {siteConfig.location}
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-xs font-sans text-[0.9375rem] leading-relaxed text-mist">
              {siteConfig.description}
            </p>

            <div className="mt-7 flex items-center gap-2">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center border border-ink-soft text-warm-white transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h2 className={columnHeading}>Explore</h2>
            <ul className="mt-6 flex flex-col gap-3.5">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={quietLink}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Visit */}
          <div>
            <h2 className={columnHeading}>Visit</h2>
            <dl className="mt-6 flex flex-col gap-3.5 font-sans text-[0.9375rem] text-mist">
              <div>
                <dt className="sr-only">Opening hours</dt>
                <dd>
                  Open daily
                  <span className="block text-warm-white">
                    {openingHours.opens} – {openingHours.closes}
                  </span>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a href={`mailto:${BOOKING_EMAIL}`} className={quietLink}>
                    {BOOKING_EMAIL}
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-5 font-sans text-[0.8125rem] leading-relaxed text-mist/80">
              Walk-ins welcome. Custom work by consultation.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink-soft pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-[0.75rem] tracking-wide text-mist">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-sans text-[0.75rem] tracking-wide text-mist/70">
            Artwork and photography may not be reproduced without permission.
          </p>
        </div>
      </Container>
    </footer>
  )
}
