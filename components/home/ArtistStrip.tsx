import Image from 'next/image'
import Link from 'next/link'
import { artistContent } from '@/lib/content'

export default function ArtistStrip() {
  return (
    <section className="flex flex-col md:flex-row min-h-[480px]">
      <div className="relative h-72 md:h-auto md:w-1/2 flex-shrink-0">
        <Image
          src="/images/profile-pic.jpg"
          alt={artistContent.name}
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="md:w-1/2 bg-warm-white flex flex-col justify-center px-8 md:px-14 py-12">
        <p className="text-[10px] tracking-[4px] uppercase text-accent font-sans mb-3">
          Founder &amp; Tattoo Artist
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-4">
          {artistContent.name}
        </h2>
        <div className="w-8 h-px bg-accent mb-6" />
        <p className="text-sm text-muted font-sans leading-relaxed mb-8 max-w-sm">
          {artistContent.pullQuote}
        </p>
        <p className="font-serif italic text-2xl text-ink mb-8">Susmita</p>
        <Link
          href="/about"
          className="self-start border border-ink text-ink text-[10px] tracking-[3px] uppercase font-sans px-6 py-3 hover:bg-ink hover:text-warm-white transition-colors"
        >
          Meet the Artist →
        </Link>
      </div>
    </section>
  )
}
