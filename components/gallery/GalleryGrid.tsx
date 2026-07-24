'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from '@/components/gallery/Lightbox'
import { aspectRatioOf } from '@/lib/imageDimensions'

export type GalleryImage = { src: string; alt: string; type: string }

type Props = {
  images: GalleryImage[]
}

const ALL = 'All'

export default function GalleryGrid({ images }: Props) {
  const types = [ALL, ...Array.from(new Set(images.map((img) => img.type)))]
  const [activeFilter, setActiveFilter] = useState(ALL)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered =
    activeFilter === ALL ? images : images.filter((img) => img.type === activeFilter)

  const countFor = (type: string) =>
    type === ALL ? images.length : images.filter((img) => img.type === type).length

  return (
    <>
      {/* Filters stay reachable while scrolling a long portfolio. Counts are
          aria-hidden so each tab's accessible name stays the plain style name. */}
      <div className="sticky top-header z-30 -mx-6 border-b border-warm-grey bg-warm-white/90 px-6 py-4 backdrop-blur-md sm:-mx-8 sm:px-8">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by style">
          {types.map((type) => {
            const active = activeFilter === type
            return (
              <button
                key={type}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setActiveFilter(type)
                  setLightboxIndex(null)
                }}
                className={`inline-flex items-center gap-2 border px-4 py-2.5 text-eyebrow uppercase font-sans font-medium transition-colors duration-300 ${
                  active
                    ? 'border-ink bg-ink text-warm-white'
                    : 'border-warm-grey bg-transparent text-muted hover:border-ink hover:text-ink'
                }`}
              >
                {type}
                <span aria-hidden="true" className={active ? 'text-warm-white/60' : 'text-muted/60'}>
                  {countFor(type)}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Masonry. Every photo is portrait-to-square, so reserving each one's
          real aspect ratio shows the whole piece instead of cropping it. */}
      <div className="mt-8 columns-2 gap-2 sm:columns-3 sm:gap-3 lg:columns-4">
        {filtered.map((image, i) => (
          <button
            key={image.src}
            type="button"
            style={{ aspectRatio: aspectRatioOf(image.src) }}
            className="group relative mb-2 block w-full break-inside-avoid overflow-hidden bg-warm-grey sm:mb-3"
            onClick={() => setLightboxIndex(i)}
            aria-label={`View ${image.alt}`}
          >
            <Image
              src={image.src}
              alt=""
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.06]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-3 left-3 translate-y-2 text-eyebrow uppercase font-sans font-medium text-warm-white opacity-0 transition-all duration-500 ease-soft group-hover:translate-y-0 group-hover:opacity-100"
            >
              {image.type}
            </span>
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
