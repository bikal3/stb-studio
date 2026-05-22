import PlaceholderImage from '@/components/PlaceholderImage'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery — STB Studio',
  description: 'Browse the full portfolio of tattoo work by Susmita Tamang Bomjan at STB Studio, Kathmandu.',
}

const GALLERY_COUNT = 18

export default function GalleryPage() {
  return (
    <div className="px-6 py-12">
      <div className="mb-8">
        <SectionLabel className="mb-2">Portfolio</SectionLabel>
        <h1 className="font-serif italic font-light text-4xl text-ink">Gallery</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {Array.from({ length: GALLERY_COUNT }).map((_, i) => (
          <PlaceholderImage key={i} className="aspect-square w-full" />
        ))}
      </div>
    </div>
  )
}
