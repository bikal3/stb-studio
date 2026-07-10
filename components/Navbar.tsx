'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/artists', label: 'Artists' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
]

const linkClass =
  'text-[11px] tracking-wide text-muted font-sans hover:text-ink transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-warm-white'

const bookClass =
  'bg-ink text-warm-white text-[10px] tracking-[2px] uppercase font-sans px-4 py-2 hover:bg-ink-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-warm-white'

function Wordmark() {
  return (
    <span className="text-[13px] tracking-[3px] uppercase text-ink font-sans font-semibold">
      STB STUDIO
    </span>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  // Lock background scroll while the overlay is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close the overlay on Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <nav className="sticky top-0 z-50 bg-warm-white border-b border-warm-grey px-6 py-3 flex justify-between items-center">
      <Link href="/" onClick={close} className="flex items-center gap-3 min-w-0">
        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-warm-grey flex-shrink-0">
          <Image
            src="/images/logo-main.png"
            alt="STB Studio"
            fill
            sizes="40px"
            className="object-cover"
            priority
          />
        </div>
        <Wordmark />
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-6">
        {NAV_LINKS.map((l) => (
          <Link key={l.href} href={l.href} className={linkClass}>
            {l.label}
          </Link>
        ))}
        <Link href="/book" className={bookClass}>
          Book
        </Link>
      </div>

      {/* Mobile menu button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
          <line x1="3" y1="7" x2="21" y2="7" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="17" x2="21" y2="17" />
        </svg>
      </button>

      {/* Mobile full-screen overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-warm-white flex flex-col md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex justify-between items-center px-6 py-3 border-b border-warm-grey">
            <Wordmark />
            <button
              type="button"
              onClick={close}
              aria-label="Close menu"
              className="flex items-center justify-center w-11 h-11 -mr-2 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                className="font-serif italic text-3xl text-ink hover:text-accent transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={close}
              className="mt-4 bg-ink text-warm-white text-xs tracking-[2px] uppercase font-sans px-8 py-4 hover:bg-ink-light transition-colors"
            >
              Book a Consult
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
