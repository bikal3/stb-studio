import Image from 'next/image'
import { artistContent } from '@/lib/content'

export default function ArtistStrip() {
  return (
    <section className="bg-ink-light px-8 py-10 flex gap-5 items-center">
      <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
        <Image
          src="/images/profile-pic.jpg"
          alt={artistContent.name}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <p className="text-[11px] tracking-[3px] text-muted uppercase font-sans mb-2">
          {artistContent.label}
        </p>
        <h2 className="font-serif italic font-light text-warm-white text-xl leading-snug">
          {artistContent.name}
        </h2>
        <p className="text-[11px] text-muted font-sans mt-2 leading-relaxed">
          {artistContent.pullQuote}
        </p>
      </div>
    </section>
  )
}
