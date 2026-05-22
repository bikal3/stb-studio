import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import { servicesPreview } from '@/lib/content'

export default function ServicesPreview() {
  return (
    <section className="bg-cream-dark px-8 py-10">
      <SectionLabel className="mb-2">Services</SectionLabel>
      <h2 className="font-serif italic font-light text-2xl text-ink mb-6">What We Offer</h2>
      <div className="flex flex-col gap-3 mb-5">
        {servicesPreview.map((service) => (
          <div key={service.name} className="bg-warm-white px-4 py-4 border-l-2 border-accent">
            <p className="text-[12px] tracking-[2px] uppercase text-ink font-sans font-semibold">
              {service.name}
            </p>
            <p className="text-[11px] text-muted font-sans mt-1">
              {service.duration ? `${service.duration} · ` : ''}
              {service.price}
            </p>
          </div>
        ))}
      </div>
      <Link
        href="/services"
        className="text-[10px] tracking-[3px] text-muted uppercase font-sans border-b border-warm-grey pb-0.5 hover:text-ink hover:border-ink transition-colors"
      >
        See Full Menu <span aria-hidden="true">→</span>
      </Link>
    </section>
  )
}
