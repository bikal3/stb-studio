import { artistContent } from '@/lib/content'
import PlaceholderImage from '@/components/PlaceholderImage'

export default function ArtistStrip() {
  return (
    <section className="bg-ink-light px-8 py-10 flex gap-5 items-center">
      <PlaceholderImage className="w-20 h-20 rounded-full flex-shrink-0" />
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
