'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from '@/components/gallery/Lightbox'

export type GalleryImage = { src: string; alt: string; type: string }

type Props = {
  images: GalleryImage[]
}

const ALL = 'All'

export default function GalleryGrid({ images }: Props) {
  const types = [ALL, ...Array.from(new Set(images.map(img => img.type)))]
  const [activeFilter, setActiveFilter] = useState(ALL)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeFilter === ALL ? images : images.filter(img => img.type === activeFilter)

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {types.map(type => (
          <button
            key={type}
            onClick={() => { setActiveFilter(type); setLightboxIndex(null) }}
            className={`text-[10px] tracking-[2px] uppercase font-sans px-4 py-2 border transition-colors ${
              activeFilter === type
                ? 'bg-ink text-warm-white border-ink'
                : 'bg-transparent text-muted border-warm-grey hover:text-ink hover:border-ink'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {filtered.map((image) => (
          <button
            key={image.src}
            className="relative aspect-square w-full overflow-hidden bg-warm-grey focus:outline-none focus:ring-2 focus:ring-accent"
            onClick={() => setLightboxIndex(filtered.indexOf(image))}
            aria-label={`View ${image.alt}`}
          >
            <Image
              src={image.src}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Lightbox navigates within the filtered set */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  )
}
