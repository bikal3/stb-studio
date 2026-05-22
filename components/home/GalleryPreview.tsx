import Link from 'next/link'
import Image from 'next/image'
import SectionLabel from '@/components/SectionLabel'

const previewImages = [
  { src: '/images/tatto-1.png', alt: 'Tattoo by Susmita Tamang Bomjan' },
  { src: '/images/tatto-2.png', alt: 'Tattoo by Susmita Tamang Bomjan' },
  { src: '/images/tatto-3.png', alt: 'Tattoo by Susmita Tamang Bomjan' },
  { src: '/images/tatto-4.png', alt: 'Tattoo by Susmita Tamang Bomjan' },
  { src: '/images/tatto-5.png', alt: 'Tattoo by Susmita Tamang Bomjan' },
  { src: '/images/tatto-6.png', alt: 'Tattoo by Susmita Tamang Bomjan' },
]

export default function GalleryPreview() {
  return (
    <section className="bg-warm-white px-8 py-10">
      <SectionLabel className="mb-2">Portfolio</SectionLabel>
      <h2 className="font-serif italic font-light text-2xl text-ink mb-6">Selected Works</h2>
      <div className="grid grid-cols-3 gap-1.5 mb-5">
        {previewImages.map((image, i) => (
          <div key={i} className="relative aspect-square w-full overflow-hidden bg-warm-grey">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 33vw, 25vw"
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
