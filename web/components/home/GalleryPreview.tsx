import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import PlaceholderImage from '@/components/PlaceholderImage'
import { galleryPreviewCount } from '@/lib/content'

export default function GalleryPreview() {
  return (
    <section className="bg-warm-white px-8 py-10">
      <SectionLabel className="mb-2">Portfolio</SectionLabel>
      <h2 className="font-serif italic font-light text-2xl text-ink mb-6">Selected Works</h2>
      <div className="grid grid-cols-3 gap-1.5 mb-5">
        {Array.from({ length: galleryPreviewCount }).map((_, i) => (
          <PlaceholderImage key={i} className="aspect-square w-full" />
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
