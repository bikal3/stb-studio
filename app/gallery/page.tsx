import GalleryGrid from '@/components/gallery/GalleryGrid'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery — STB Studio',
  description: 'Browse the full portfolio of tattoo work by Susmita Tamang Bomjan at STB Studio, Kathmandu.',
}

const galleryImages = [
  // Colour Tattoo
  { src: '/images/colour-tattoo/IMG_8806.JPG', alt: 'Colour tattoo by Susmita Tamang Bomjan', type: 'Colour Tattoo' },
  { src: '/images/colour-tattoo/IMG_8807.JPG', alt: 'Colour tattoo by Susmita Tamang Bomjan', type: 'Colour Tattoo' },
  { src: '/images/colour-tattoo/IMG_8810.JPG', alt: 'Colour tattoo by Susmita Tamang Bomjan', type: 'Colour Tattoo' },
  { src: '/images/colour-tattoo/IMG_8822.JPG', alt: 'Colour tattoo by Susmita Tamang Bomjan', type: 'Colour Tattoo' },
  { src: '/images/colour-tattoo/IMG_8828.JPG', alt: 'Colour tattoo by Susmita Tamang Bomjan', type: 'Colour Tattoo' },
  { src: '/images/colour-tattoo/IMG_8829.JPG', alt: 'Colour tattoo by Susmita Tamang Bomjan', type: 'Colour Tattoo' },
  { src: '/images/colour-tattoo/IMG_8830.JPG', alt: 'Colour tattoo by Susmita Tamang Bomjan', type: 'Colour Tattoo' },
  { src: '/images/colour-tattoo/IMG_8839.JPG', alt: 'Colour tattoo by Susmita Tamang Bomjan', type: 'Colour Tattoo' },
  { src: '/images/colour-tattoo/IMG_8842.JPG', alt: 'Colour tattoo by Susmita Tamang Bomjan', type: 'Colour Tattoo' },
  { src: '/images/colour-tattoo/IMG_8843.JPG', alt: 'Colour tattoo by Susmita Tamang Bomjan', type: 'Colour Tattoo' },
  { src: '/images/colour-tattoo/IMG_8844.JPG', alt: 'Colour tattoo by Susmita Tamang Bomjan', type: 'Colour Tattoo' },
  { src: '/images/colour-tattoo/IMG_8850.jpg', alt: 'Colour tattoo by Susmita Tamang Bomjan', type: 'Colour Tattoo' },
  // Fine Line
  { src: '/images/fine-line/IMG_8803.JPG', alt: 'Fine line tattoo by Susmita Tamang Bomjan', type: 'Fine Line' },
  { src: '/images/fine-line/IMG_8811.JPG', alt: 'Fine line tattoo by Susmita Tamang Bomjan', type: 'Fine Line' },
  { src: '/images/fine-line/IMG_8814.JPG', alt: 'Fine line tattoo by Susmita Tamang Bomjan', type: 'Fine Line' },
  { src: '/images/fine-line/IMG_8819.JPG', alt: 'Fine line tattoo by Susmita Tamang Bomjan', type: 'Fine Line' },
  { src: '/images/fine-line/IMG_8826.JPG', alt: 'Fine line tattoo by Susmita Tamang Bomjan', type: 'Fine Line' },
  { src: '/images/fine-line/IMG_8827.JPG', alt: 'Fine line tattoo by Susmita Tamang Bomjan', type: 'Fine Line' },
  { src: '/images/fine-line/IMG_8834.JPG', alt: 'Fine line tattoo by Susmita Tamang Bomjan', type: 'Fine Line' },
  { src: '/images/fine-line/IMG_8835.JPG', alt: 'Fine line tattoo by Susmita Tamang Bomjan', type: 'Fine Line' },
  { src: '/images/fine-line/IMG_8841.JPG', alt: 'Fine line tattoo by Susmita Tamang Bomjan', type: 'Fine Line' },
  { src: '/images/fine-line/IMG_8848.JPG', alt: 'Fine line tattoo by Susmita Tamang Bomjan', type: 'Fine Line' },
  { src: '/images/fine-line/IMG_8850.jpg', alt: 'Fine line tattoo by Susmita Tamang Bomjan', type: 'Fine Line' },
  { src: '/images/fine-line/IMG_8858.jpg', alt: 'Fine line tattoo by Susmita Tamang Bomjan', type: 'Fine Line' },
  { src: '/images/fine-line/IMG_8859.jpg', alt: 'Fine line tattoo by Susmita Tamang Bomjan', type: 'Fine Line' },
  // Old School
  { src: '/images/old-school/IMG_8851.jpg', alt: 'Old school tattoo by Susmita Tamang Bomjan', type: 'Old School' },
  { src: '/images/old-school/IMG_8852.jpg', alt: 'Old school tattoo by Susmita Tamang Bomjan', type: 'Old School' },
  { src: '/images/old-school/IMG_8853.jpg', alt: 'Old school tattoo by Susmita Tamang Bomjan', type: 'Old School' },
  { src: '/images/old-school/IMG_8854.jpg', alt: 'Old school tattoo by Susmita Tamang Bomjan', type: 'Old School' },
  { src: '/images/old-school/IMG_8855.jpg', alt: 'Old school tattoo by Susmita Tamang Bomjan', type: 'Old School' },
  { src: '/images/old-school/IMG_8856.jpg', alt: 'Old school tattoo by Susmita Tamang Bomjan', type: 'Old School' },
]

export default function GalleryPage() {
  return (
    <div className="px-6 py-12">
      <div className="mb-8">
        <SectionLabel className="mb-2">Portfolio</SectionLabel>
        <h1 className="font-serif italic font-light text-4xl text-ink">Gallery</h1>
      </div>
      <GalleryGrid images={galleryImages} />
    </div>
  )
}
