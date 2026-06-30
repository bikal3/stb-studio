import Link from 'next/link'
import Image from 'next/image'
import SectionLabel from '@/components/SectionLabel'

const previewImages = [
  { src: '/images/colour-tattoo/IMG_8806.JPG', alt: 'Colour tattoo by Susmita Tamang Bhandari' },
  { src: '/images/fine-line/IMG_8803.JPG', alt: 'Fine line tattoo by Susmita Tamang Bhandari' },
  { src: '/images/old-school/IMG_8851.jpg', alt: 'Old school tattoo by Susmita Tamang Bhandari' },
  { src: '/images/colour-tattoo/IMG_8828.JPG', alt: 'Colour tattoo by Susmita Tamang Bhandari' },
  { src: '/images/fine-line/IMG_8826.JPG', alt: 'Fine line tattoo by Susmita Tamang Bhandari' },
  { src: '/images/old-school/IMG_8854.jpg', alt: 'Old school tattoo by Susmita Tamang Bhandari' },
]

export default function GalleryPreview() {
  return (
    <section className="bg-warm-white px-8 py-10">
      <SectionLabel className="mb-2">Portfolio</SectionLabel>
      <h2 className="font-serif italic font-light text-2xl text-ink mb-6">Selected Works</h2>
      <div className="grid grid-cols-3 gap-1.5 mb-5">
        {previewImages.map((image) => (
          <div key={image.src} className="relative aspect-square w-full overflow-hidden bg-warm-grey">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <Link
        href="/gallery"
        className="text-[10px] tracking-[3px] text-muted uppercase font-sans border-b border-warm-grey pb-0.5 hover:text-ink hover:border-ink transition-colors"
      >
        View Full Gallery <span aria-hidden="true">→</span>
      </Link>
    </section>
  )
}
