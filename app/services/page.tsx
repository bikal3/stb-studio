import SectionLabel from '@/components/SectionLabel'
import ServiceCategorySection from '@/components/services/ServiceCategorySection'
import { services, bookingCtaLabel } from '@/lib/content'
import { whatsappUrl } from '@/lib/links'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services — STB Studio',
  description:
    'Full pricing menu for tattoo sessions, STB Objects, and custom experiences at STB Studio, Kathmandu.',
}

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-cream px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <SectionLabel className="mb-2">Pricing</SectionLabel>
          <h1 className="font-serif italic font-light text-4xl text-ink">Services</h1>
        </div>
      </section>

      {services.map((category, i) => (
        <ServiceCategorySection
          key={category.category}
          category={category}
          dark={i % 2 !== 0}
        />
      ))}

      <section className="bg-ink-light px-8 py-12 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-serif italic text-warm-white text-xl mb-4">Ready to begin?</p>
          <p className="text-sm text-muted font-sans mb-6">
            Book a free design consultation to discuss your ideas.
          </p>
          <a
            href={whatsappUrl("I'd like to book a design consultation at STB Studio")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-warm-white text-warm-white text-[10px] tracking-[3px] uppercase font-sans px-6 py-3 hover:bg-warm-white hover:text-ink transition-colors"
          >
            {bookingCtaLabel}
          </a>
        </div>
      </section>
    </div>
  )
}
