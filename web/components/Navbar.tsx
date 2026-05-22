import Link from 'next/link'
import { whatsappUrl } from '@/lib/links'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-warm-white border-b border-warm-grey px-6 py-4 flex justify-between items-center">
      <Link
        href="/"
        className="text-[13px] tracking-[3px] uppercase text-ink font-sans font-semibold"
      >
        STB STUDIO
      </Link>
      <div className="flex items-center gap-6">
        <Link href="/gallery" className="text-[11px] tracking-wide text-muted font-sans hover:text-ink transition-colors">
          Gallery
        </Link>
        <Link href="/about" className="text-[11px] tracking-wide text-muted font-sans hover:text-ink transition-colors">
          About
        </Link>
        <Link href="/services" className="text-[11px] tracking-wide text-muted font-sans hover:text-ink transition-colors">
          Services
        </Link>
        <a
          href={whatsappUrl("I'd like to book a tattoo consult at STB Studio")}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-ink text-warm-white text-[10px] tracking-[2px] uppercase font-sans px-4 py-2 hover:bg-ink-light transition-colors"
        >
          Book
        </a>
      </div>
    </nav>
  )
}
