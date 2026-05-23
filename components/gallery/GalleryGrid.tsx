'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from '@/components/gallery/Lightbox'

type GalleryImage = { src: string; alt: string }

type Props = {
  images: GalleryImage[]
}

export default function GalleryGrid({ images }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((image, i) => (
          <button
            key={image.src}
            className="relative aspect-square w-full overflow-hidden bg-warm-grey focus:outline-none focus:ring-2 focus:ring-accent"
            onClick={() => setLightboxIndex(i)}
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
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  )
}
