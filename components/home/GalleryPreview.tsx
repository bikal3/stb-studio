import Link from 'next/link'
import Image from 'next/image'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import ArrowLink from '@/components/ui/ArrowLink'
import Reveal from '@/components/ui/Reveal'
import { ARTIST_NAME } from '@/lib/content'

/**
 * Five images so the mosaic resolves flush on both breakpoints: the lead tile
 * covers 2×2, the remaining four fill the rest of the two rows.
 */
const previewImages = [
  {
    src: '/images/colour-tattoo/IMG_8806.JPG',
    alt: `Colour tattoo by ${ARTIST_NAME}`,
    type: 'Colour',
    feature: true,
  },
  {
    src: '/images/fine-line/IMG_8803.JPG',
    alt: `Fine line tattoo by ${ARTIST_NAME}`,
    type: 'Fine Line',
  },
  {
    src: '/images/old-school/IMG_8851.jpg',
    alt: `Old school tattoo by ${ARTIST_NAME}`,
    type: 'Old School',
  },
  {
    src: '/images/floral/IMG_8824.jpg',
    alt: `Floral tattoo by ${ARTIST_NAME}`,
    type: 'Floral',
  },
  {
    src: '/images/black-and-grey/IMG_8862.jpg',
    alt: `Black and grey tattoo by ${ARTIST_NAME}`,
    type: 'Black & Grey',
  },
]

export default function GalleryPreview() {
  return (
    <Section surface="white">
      <Container>
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Portfolio" title="Selected works" />
          <ArrowLink href="/gallery" className="shrink-0 sm:pb-2">
            View full gallery
          </ArrowLink>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-12 grid auto-rows-[clamp(7.5rem,19vw,13rem)] grid-cols-2 gap-2 md:grid-cols-4 md:gap-3"
        >
          {previewImages.map((image) => (
            <Link
              key={image.src}
              href="/gallery"
              aria-label={`View ${image.type} work in the gallery`}
              className={`group relative overflow-hidden bg-warm-grey ${
                image.feature ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={image.feature ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
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
            </Link>
          ))}
        </Reveal>
      </Container>
    </Section>
  )
}
