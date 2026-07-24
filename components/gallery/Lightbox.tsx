'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

type LightboxImage = { src: string; alt: string; type?: string }

type Props = {
  images: LightboxImage[]
  initialIndex: number
  onClose: () => void
}

const SWIPE_THRESHOLD = 48

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={direction === 'left' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} />
    </svg>
  )
}

export default function Lightbox({ images, initialIndex, onClose }: Props) {
  const [currentIndex, setCurrentIndex] = useState(
    Math.max(0, Math.min(initialIndex, images.length - 1))
  )
  const closeRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)

  const prev = useCallback(
    () => setCurrentIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  )
  const next = useCallback(
    () => setCurrentIndex((i) => (i + 1) % images.length),
    [images.length]
  )

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key !== 'Tab') return

      // Keep focus inside the viewer while it is open.
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('button')
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose, prev, next])

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = ''
      previouslyFocused?.focus?.()
    }
  }, [])

  const current = images[currentIndex]

  const controlClass =
    'flex h-12 w-12 items-center justify-center border border-white/20 text-white/70 backdrop-blur-sm transition-colors duration-300 hover:border-white/60 hover:text-white'

  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 z-[60] flex animate-fade flex-col bg-ink/97"
      style={{ '--focus-ring': 'var(--color-accent)' } as React.CSSProperties}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0]?.clientX ?? null
      }}
      onTouchEnd={(e) => {
        const start = touchStartX.current
        const end = e.changedTouches[0]?.clientX
        touchStartX.current = null
        if (start == null || end == null) return
        if (Math.abs(end - start) < SWIPE_THRESHOLD) return
        if (end < start) next()
        else prev()
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      {/* Top bar: caption + counter + close */}
      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <p className="min-w-0 truncate text-eyebrow uppercase font-sans text-white/60">
          {current.type ?? ''}
        </p>
        <div className="flex items-center gap-4">
          <p className="text-eyebrow font-sans tabular-nums text-white/60">
            {currentIndex + 1} / {images.length}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            className={controlClass}
            aria-label="Close"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          </button>
        </div>
      </div>

      {/* Stage */}
      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-2 pb-4 sm:px-6"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose()
        }}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            prev()
          }}
          className={`${controlClass} absolute left-2 top-1/2 z-10 -translate-y-1/2 sm:left-4`}
          aria-label="Previous image"
        >
          <ChevronIcon direction="left" />
        </button>

        <div className="relative h-full w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="animate-fade object-contain"
          />
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            next()
          }}
          className={`${controlClass} absolute right-2 top-1/2 z-10 -translate-y-1/2 sm:right-4`}
          aria-label="Next image"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>

      <p className="hidden px-6 pb-5 text-center font-sans text-[0.8125rem] text-white/45 sm:block">
        Use ← → to browse, Esc to close
      </p>
    </div>
  )
}
