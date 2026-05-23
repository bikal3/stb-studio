'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

type Props = {
  images: { src: string; alt: string }[]
  initialIndex: number
  onClose: () => void
}

export default function Lightbox({ images, initialIndex, onClose }: Props) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') setCurrentIndex(i => (i - 1 + images.length) % images.length)
      if (e.key === 'ArrowRight') setCurrentIndex(i => (i + 1) % images.length)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [images.length, onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const prev = () => setCurrentIndex(i => (i - 1 + images.length) % images.length)
  const next = () => setCurrentIndex(i => (i + 1) % images.length)

  return (
    <div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <button
        onClick={e => { e.stopPropagation(); onClose() }}
        className="absolute top-4 right-4 text-white text-2xl opacity-70 hover:opacity-100 transition-opacity z-10"
        aria-label="Close"
      >
        ✕
      </button>
      <button
        onClick={e => { e.stopPropagation(); prev() }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl opacity-50 hover:opacity-100 transition-opacity z-10"
        aria-label="Previous image"
      >
        ‹
      </button>
      <div
        className="relative w-[90vw] h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          sizes="90vw"
          className="object-contain"
        />
      </div>
      <button
        onClick={e => { e.stopPropagation(); next() }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl opacity-50 hover:opacity-100 transition-opacity z-10"
        aria-label="Next image"
      >
        ›
      </button>
    </div>
  )
}
