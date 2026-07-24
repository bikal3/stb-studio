'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { heroContent, siteConfig } from '@/lib/content'
import { whatsappUrl } from '@/lib/links'
import { buttonClasses, ButtonArrow } from '@/components/ui/Button'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [ready, setReady] = useState(false)

  // Hold the video on its first frame for anyone who has asked for less
  // motion, and fade it in so there is no hard cut from the backdrop.
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause()
      video.removeAttribute('loop')
    }
    if (video.readyState >= 2) setReady(true)
  }, [])

  return (
    <section className="surface-ink relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-32 text-center">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        onCanPlay={() => setReady(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-soft ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
        src={`${BASE_PATH}/videos/hero.mp4`}
      />

      {/* Two scrims: a vertical gradient that keeps the navbar and the copy
          legible, and a vignette that pulls focus to the centre. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/60 to-ink/95"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_25%,rgba(20,20,20,0.75)_100%)]"
      />

      <div className="relative z-10 flex flex-col items-center">
        <p className="animate-rise text-eyebrow uppercase font-sans font-medium text-accent">
          {heroContent.eyebrow}
        </p>

        <h1 className="mt-8 font-serif font-light italic text-display text-warm-white">
          {heroContent.headline.map((line, i) => (
            <span
              key={line}
              className="block animate-rise"
              style={{ animationDelay: `${120 + i * 120}ms` }}
            >
              {line}
            </span>
          ))}
        </h1>

        <div
          aria-hidden="true"
          className="mt-10 h-px w-16 animate-fade bg-warm-white/30"
          style={{ animationDelay: '520ms' }}
        />

        <p
          className="mt-8 max-w-md animate-rise text-lead font-sans text-warm-white/75 text-balance"
          style={{ animationDelay: '560ms' }}
        >
          {heroContent.subtext}
        </p>

        <div
          className="mt-12 flex animate-rise flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          style={{ animationDelay: '680ms' }}
        >
          <a
            href={whatsappUrl("I'd like to book a tattoo consult at STB Studio")}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses({ variant: 'solid-light', size: 'lg' })}
          >
            {heroContent.cta}
            <ButtonArrow />
          </a>
          <Link href="/gallery" className={buttonClasses({ variant: 'outline-light', size: 'lg' })}>
            View the Work
          </Link>
        </div>
      </div>

      <a
        href="#studio"
        aria-label="Scroll to studio introduction"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-warm-white/60 transition-colors hover:text-warm-white"
      >
        <span className="text-eyebrow uppercase font-sans">{siteConfig.location}</span>
        <svg
          width="14"
          height="22"
          viewBox="0 0 14 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          className="animate-nudge"
          aria-hidden="true"
        >
          <path d="M7 2v16M2 13l5 5 5-5" />
        </svg>
      </a>
    </section>
  )
}
