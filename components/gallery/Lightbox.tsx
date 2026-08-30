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
  const dialogRef = useRef<HTMLDialogElement>(null)
  const touchStartX = useRef<number | null>(null)

  const prev = useCallback(
    () => setCurrentIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  )
  const next = useCallback(
    () => setCurrentIndex((i) => (i + 1) % images.length),
    [images.length]
  )

  // Mounted only while open, so it opens once. Every close route — button,
  // backdrop, Escape — ends at the element's own close(), and the resulting
  // close event is what tells the parent to unmount us. Read through a ref so
  // the parent's inline onClose does not re-run this and reopen the dialog.
  const onCloseRef = useRef(onClose)
  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    // Guarded: showModal() throws on an already-open dialog, and StrictMode
    // runs this effect twice. Unguarded, the throw skips the listener below.
    if (!dialog.open) dialog.showModal()
    const handleClose = () => onCloseRef.current()
    dialog.addEventListener('close', handleClose)
    return () => dialog.removeEventListener('close', handleClose)
  }, [])

  // Arrow keys are ours. Escape, the focus trap, an inert page behind, and
  // focus returning to the thumbnail all come from showModal().
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [prev, next])

  const close = () => dialogRef.current?.close()
  const current = images[currentIndex]

  const controlClass =
    'flex h-12 w-12 items-center justify-center border border-white/20 text-white/70 backdrop-blur-sm transition-colors duration-300 hover:border-white/60 hover:text-white'

  return (
    <dialog
      ref={dialogRef}
      aria-label="Image viewer"
      className="m-0 hidden h-full max-h-none w-full max-w-none animate-fade flex-col border-0 bg-ink/97 p-0 open:flex"
      style={{ '--focus-ring': 'var(--color-accent)' } as React.CSSProperties}
      onClick={(e) => {
        if (e.target === e.currentTarget) close()
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
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              close()
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
          if (e.target === e.currentTarget) close()
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
    </dialog>
  )
}
