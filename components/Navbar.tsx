import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-warm-white border-b border-warm-grey px-6 py-3 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-3">
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
        <span className="text-[13px] tracking-[3px] uppercase text-ink font-sans font-semibold">
          STB STUDIO
        </span>
      </Link>
      <div className="flex items-center gap-6">
        <Link href="/" className="text-[11px] tracking-wide text-muted font-sans hover:text-ink transition-colors">
          Home
        </Link>
        <Link href="/gallery" className="text-[11px] tracking-wide text-muted font-sans hover:text-ink transition-colors">
          Gallery
        </Link>
        <Link href="/artists" className="text-[11px] tracking-wide text-muted font-sans hover:text-ink transition-colors">
          Artists
        </Link>
        <Link href="/about" className="text-[11px] tracking-wide text-muted font-sans hover:text-ink transition-colors">
          About
        </Link>
        <Link href="/services" className="text-[11px] tracking-wide text-muted font-sans hover:text-ink transition-colors">
          Services
        </Link>
        <Link
          href="/book"
          className="bg-ink text-warm-white text-[10px] tracking-[2px] uppercase font-sans px-4 py-2 hover:bg-ink-light transition-colors"
        >
          Book
        </Link>
      </div>
    </nav>
  )
}
