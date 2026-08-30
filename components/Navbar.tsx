'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { buttonClasses } from '@/components/ui/Button'

const NAV_LINKS = [
  { href: '/gallery', label: 'Gallery' },
  { href: '/services', label: 'Services' },
  { href: '/aftercare', label: 'Aftercare' },
  { href: '/about', label: 'About' },
]

function Wordmark({ inverted }: { inverted: boolean }) {
  return (
    <span
      className={`text-[0.8125rem] tracking-[0.22em] uppercase font-sans font-semibold transition-colors duration-300 ${
        inverted ? 'text-warm-white' : 'text-ink'
      }`}
    >
      STB STUDIO
    </span>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <line x1="5" y1="5" x2="19" y2="19" />
          <line x1="19" y1="5" x2="5" y2="19" />
        </>
      ) : (
        <>
          <line x1="3" y1="7" x2="21" y2="7" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="17" x2="21" y2="17" />
        </>
      )}
    </svg>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const close = useCallback(() => dialogRef.current?.close(), [])

  // The home page opens with a full-bleed video, so the bar floats over it
  // until the first scroll. Every other page needs the solid bar immediately.
  const overlayMode = pathname === '/' && !scrolled && !open

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // showModal() is what buys the Escape key, the focus trap, an inert page
  // behind, and focus returning to the trigger on close — so none of that is
  // written out here. Scroll lock is the one gap, handled in globals.css.
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    else if (!open && dialog.open) dialog.close()
  }, [open])

  // Escape closes the dialog without going through React, so listen for the
  // resulting close event to pull our own state back in step. React's onClose
  // prop does not fire for it.
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const syncClosed = () => setOpen(false)
    dialog.addEventListener('close', syncClosed)
    return () => dialog.removeEventListener('close', syncClosed)
  }, [])

  const isActive = (href: string) => pathname === href

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        overlayMode
          ? 'bg-transparent border-b border-transparent'
          : 'bg-warm-white/90 backdrop-blur-md border-b border-warm-grey'
      }`}
      style={overlayMode ? ({ '--focus-ring': 'var(--color-accent)' } as React.CSSProperties) : undefined}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[88rem] items-center justify-between px-6 py-3.5 sm:px-8"
      >
        <Link href="/" onClick={close} className="flex min-w-0 items-center gap-3">
          <span
            className={`relative block h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border transition-colors duration-300 ${
              overlayMode ? 'border-warm-white/35' : 'border-warm-grey'
            }`}
          >
            {/* Eager, not preloaded: at 40px it is never the LCP, so it should
                not compete in the <head> with the real hero content. */}
            <Image
              src="/images/logo-main.png"
              alt="STB Studio"
              fill
              sizes="40px"
              className="object-cover"
              loading="eager"
            />
          </span>
          <Wordmark inverted={overlayMode} />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? 'page' : undefined}
              className={`relative px-3 py-2 text-[0.75rem] font-sans tracking-wide transition-colors duration-300
                after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0
                after:bg-current after:transition-transform after:duration-300 after:ease-soft
                hover:after:scale-x-100 aria-[current=page]:after:scale-x-100 ${
                  overlayMode
                    ? 'text-warm-white/80 hover:text-warm-white aria-[current=page]:text-warm-white'
                    : 'text-muted hover:text-ink aria-[current=page]:text-ink'
                }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            aria-current={isActive('/book') ? 'page' : undefined}
            className={`${buttonClasses({
              variant: overlayMode ? 'outline-light' : 'solid',
              size: 'sm',
            })} ml-3`}
          >
            Book
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className={`flex h-11 w-11 -mr-2 items-center justify-center transition-colors duration-300 md:hidden ${
            overlayMode ? 'text-warm-white' : 'text-ink'
          }`}
        >
          <MenuIcon open={false} />
        </button>
      </nav>

      {/* Mobile full-screen overlay. Contents mount with the dialog so the
          staggered link animation replays on every open. */}
      <dialog
        ref={dialogRef}
        aria-label="Menu"
        className="surface-ink m-0 hidden h-full max-h-none w-full max-w-none animate-fade flex-col border-0 p-0 open:flex md:open:hidden"
      >
        {open && (
          <>
            <div className="flex items-center justify-between border-b border-ink-soft px-6 py-3.5">
              <Wordmark inverted />
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                className="-mr-2 flex h-11 w-11 items-center justify-center text-warm-white"
              >
                <MenuIcon open />
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-1 px-8">
              {NAV_LINKS.map((l, i) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  aria-current={isActive(l.href) ? 'page' : undefined}
                  style={{ animationDelay: `${60 + i * 45}ms` }}
                  className="flex animate-rise items-baseline gap-4 border-b border-ink-soft py-4 font-serif text-3xl font-light text-warm-white transition-colors hover:text-accent aria-[current=page]:text-accent"
                >
                  <span className="font-sans text-eyebrow text-mist" aria-hidden="true">
                    0{i + 1}
                  </span>
                  {l.label}
                </Link>
              ))}
              <Link
                href="/book"
                onClick={close}
                style={{ animationDelay: '330ms' }}
                className={`${buttonClasses({ variant: 'solid-light', size: 'lg' })} mt-8 animate-rise w-full`}
              >
                Book a Consult
              </Link>
            </div>
          </>
        )}
      </dialog>
    </header>
  )
}
