import Image from 'next/image'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery — STB Studio',
  description: 'Browse the full portfolio of tattoo work by Susmita Tamang Bomjan at STB Studio, Kathmandu.',
}

const galleryImages = [
  { src: '/images/tatto-1.png', alt: 'Tattoo by Susmita Tamang Bomjan — STB Studio' },
  { src: '/images/tatto-2.png', alt: 'Tattoo by Susmita Tamang Bomjan — STB Studio' },
  { src: '/images/tatto-3.png', alt: 'Tattoo by Susmita Tamang Bomjan — STB Studio' },
  { src: '/images/tatto-4.png', alt: 'Tattoo by Susmita Tamang Bomjan — STB Studio' },
  { src: '/images/tatto-5.png', alt: 'Tattoo by Susmita Tamang Bomjan — STB Studio' },
  { src: '/images/tatto-6.png', alt: 'Tattoo by Susmita Tamang Bomjan — STB Studio' },
  { src: '/images/tatto-7.png', alt: 'Tattoo by Susmita Tamang Bomjan — STB Studio' },
  { src: '/images/tatto-8.png', alt: 'Tattoo by Susmita Tamang Bomjan — STB Studio' },
]

export default function GalleryPage() {
  return (
    <div className="px-6 py-12">
      <div className="mb-8">
        <SectionLabel className="mb-2">Portfolio</SectionLabel>
        <h1 className="font-serif italic font-light text-4xl text-ink">Gallery</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {galleryImages.map((image, i) => (
          <div key={i} className="relative aspect-square w-full overflow-hidden bg-warm-grey">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
