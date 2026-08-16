import GalleryGrid from '@/components/gallery/GalleryGrid'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import { ARTIST_NAME } from '@/lib/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery',
  description: `Browse the full portfolio of tattoo work by ${ARTIST_NAME} at STB Studio, Kathmandu.`,
  alternates: { canonical: '/gallery' },
}

/**
 * Grouped by style so each photo's alt text and filter tab are derived rather
 * than repeated per row. `subject` becomes the alt text, which search engines
 * read and screen readers announce.
 */
const COLLECTIONS: { type: string; subject: string; dir: string; files: string[] }[] = [
  {
    type: 'Colour Tattoo',
    subject: 'Colour tattoo',
    dir: 'colour-tattoo',
    files: [
      'IMG_8806.JPG',
      'IMG_8807.JPG',
      'IMG_8810.JPG',
      'IMG_8822.JPG',
      'IMG_8828.JPG',
      'IMG_8829.JPG',
      'IMG_8830.JPG',
      'IMG_8839.JPG',
      'IMG_8842.JPG',
      'IMG_8843.JPG',
      'IMG_8844.JPG',
      'IMG_8850.jpg',
    ],
  },
  {
    type: 'Fine Line',
    subject: 'Fine line tattoo',
    dir: 'fine-line',
    files: [
      'IMG_8803.JPG',
      'IMG_8811.JPG',
      'IMG_8814.JPG',
      'IMG_8819.JPG',
      'IMG_8826.JPG',
      'IMG_8827.JPG',
      'IMG_8834.JPG',
      'IMG_8835.JPG',
      'IMG_8841.JPG',
      'IMG_8848.JPG',
      'IMG_8858.jpg',
      'IMG_8859.jpg',
    ],
  },
  {
    type: 'Old School',
    subject: 'Old school tattoo',
    dir: 'old-school',
    files: [
      'IMG_8851.jpg',
      'IMG_8852.jpg',
      'IMG_8853.jpg',
      'IMG_8854.jpg',
      'IMG_8855.jpg',
      'IMG_8856.jpg',
    ],
  },
  {
    type: 'Black & Grey',
    subject: 'Black and grey tattoo',
    dir: 'black-and-grey',
    files: [
      'IMG_8817.jpg',
      'IMG_8862.jpg',
      'IMG_8863.jpg',
      'IMG_8864.jpg',
      'IMG_8865.jpg',
      'IMG_8867.jpg',
    ],
  },
  {
    type: 'Floral',
    subject: 'Floral tattoo',
    dir: 'floral',
    files: [
      'IMG_8820.jpg',
      'IMG_8824.jpg',
      'IMG_8825.jpg',
      'IMG_8882.jpg',
      'IMG_8883.jpg',
      'IMG_8885.jpg',
    ],
  },
  {
    type: 'Micro Realism',
    subject: 'Micro realism tattoo',
    dir: 'micro-realism',
    files: [
      'IMG_8808.jpg',
      'IMG_8809.jpg',
      'IMG_8812.jpg',
      'IMG_8813.jpg',
      'IMG_8860 2.jpg',
      'IMG_8881.jpg',
    ],
  },
]

const galleryImages = COLLECTIONS.flatMap(({ type, subject, dir, files }) =>
  files.map((file) => ({
    src: `/images/${dir}/${file}`,
    alt: `${subject} by ${ARTIST_NAME}`,
    type,
  }))
)

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Gallery"
        lead={`${galleryImages.length} pieces across fine line, colour, blackwork, floral, micro realism and old school. Tap any piece to view it full size.`}
      />
      <Section surface="white" size="sm">
        <Container>
          <GalleryGrid images={galleryImages} />
        </Container>
      </Section>
    </>
  )
}
