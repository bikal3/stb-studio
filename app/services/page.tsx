import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import ServiceCategorySection from '@/components/services/ServiceCategorySection'
import { buttonClasses, ButtonArrow } from '@/components/ui/Button'
import { services, bookingCtaLabel } from '@/lib/content'
import { whatsappUrl } from '@/lib/links'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Full pricing menu for tattoo sessions, STB Objects, and custom experiences at STB Studio, Kathmandu.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Services"
        lead="Session rates are a guide — final pricing depends on size, placement and detail. Every custom piece starts with a consultation."
      />

      {services.map((category, i) => (
        <ServiceCategorySection
          key={category.category}
          category={category}
          index={i}
          dark={i % 2 !== 0}
        />
      ))}

      <Section surface="ink">
        <Container width="narrow">
          <Reveal className="flex flex-col items-center text-center">
            <h2 className="font-serif text-h2 font-light italic text-warm-white text-balance">
              Ready to begin?
            </h2>
            <p className="mt-5 max-w-md text-lead font-sans text-mist">
              Book a design consultation to talk through your idea. The fee is waived if you go
              ahead with the tattoo or object.
            </p>
            <a
              href={whatsappUrl("I'd like to book a design consultation at STB Studio")}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonClasses({ variant: 'solid-light', size: 'lg' })} mt-9`}
            >
              {bookingCtaLabel}
              <ButtonArrow />
            </a>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
