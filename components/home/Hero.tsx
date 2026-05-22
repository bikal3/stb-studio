import { heroContent } from '@/lib/content'
import { whatsappUrl } from '@/lib/links'

export default function Hero() {
  return (
    <section className="bg-cream px-8 py-20 text-center flex flex-col items-center">
      <p className="text-[11px] tracking-[4px] text-muted uppercase font-sans mb-4">
        {heroContent.eyebrow}
      </p>
      <h1 className="font-serif italic font-light text-6xl md:text-7xl text-ink leading-[1.1] tracking-tight mb-5">
        {heroContent.headline.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h1>
      <div className="w-10 h-px bg-warm-grey mx-auto mb-5" />
      <p className="text-sm text-muted font-sans leading-relaxed max-w-xs mb-8">
        {heroContent.subtext}
      </p>
      <a
        href={whatsappUrl("I'd like to book a tattoo consult at STB Studio")}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-ink text-ink text-[10px] tracking-[3px] uppercase font-sans px-6 py-3 hover:bg-ink hover:text-warm-white transition-colors"
      >
        {heroContent.cta}
      </a>
    </section>
  )
}
