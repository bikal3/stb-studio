'use client'

import { heroContent } from '@/lib/content'
import { whatsappUrl } from '@/lib/links'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden bg-ink">
      {/* video background (self-hosted, compressed) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        src={`${BASE_PATH}/videos/hero.mp4`}
      />

      {/* dark overlay */}
      <div className="absolute inset-0 bg-ink/70" />

      {/* content */}
      <div className="relative z-10 px-8 py-20 flex flex-col items-center">
        <p className="text-[11px] tracking-[4px] text-accent uppercase font-sans mb-4">
          {heroContent.eyebrow}
        </p>
        <h1 className="font-serif italic font-light text-6xl md:text-7xl text-warm-white leading-[1.1] tracking-tight mb-5">
          {heroContent.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <div className="w-10 h-px bg-warm-grey/40 mx-auto mb-5" />
        <p className="text-sm text-warm-white/70 font-sans leading-relaxed max-w-xs mb-8">
          {heroContent.subtext}
        </p>
        <a
          href={whatsappUrl("I'd like to book a tattoo consult at STB Studio")}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-warm-white text-warm-white text-[10px] tracking-[3px] uppercase font-sans px-6 py-3 hover:bg-warm-white hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {heroContent.cta}
        </a>
      </div>
    </section>
  )
}
