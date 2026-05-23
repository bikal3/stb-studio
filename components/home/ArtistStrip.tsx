import Image from 'next/image'
import Link from 'next/link'
import { artistContent } from '@/lib/content'

export default function ArtistStrip() {
  return (
    <section className="flex flex-col md:flex-row min-h-[480px]">
      <div className="relative h-72 md:h-auto md:w-1/2 flex-shrink-0 bg-ink">
        <Image
          src="/images/profile-pic.png"
          alt={artistContent.name}
          fill
          className="object-contain object-center"
          priority
        />
      </div>

      <div className="md:w-1/2 bg-ink flex flex-col justify-center px-8 md:px-14 py-12">
        <p className="text-[10px] tracking-[4px] uppercase text-accent font-sans mb-3">
          Founder &amp; Tattoo Artist
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-warm-white leading-tight mb-4">
          {artistContent.name}
        </h2>
        <div className="w-8 h-px bg-accent mb-6" />
        <p className="text-sm text-muted font-sans leading-relaxed mb-8 max-w-sm">
          {artistContent.pullQuote}
        </p>
        <p className="font-signature text-4xl text-warm-white mb-8">Susmita</p>
        <Link
          href="/about"
          className="self-start border border-warm-white text-warm-white text-[10px] tracking-[3px] uppercase font-sans px-6 py-3 hover:bg-warm-white hover:text-ink transition-colors"
        >
          Meet the Artist →
        </Link>
      </div>
    </section>
  )
}
