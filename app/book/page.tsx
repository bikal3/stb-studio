import type { Metadata } from 'next'
import BookingForm from '@/components/book/BookingForm'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import SectionLabel from '@/components/SectionLabel'
import Reveal from '@/components/ui/Reveal'
import { buttonClasses, ButtonArrow } from '@/components/ui/Button'
import { whatsappUrl } from '@/lib/links'
import { openingHours } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Book a Consult',
  description: 'Book a tattoo consultation with Susmita Tamang Bhandari at STB Studio, Kathmandu.',
}

const steps = [
  {
    num: '01',
    title: 'Send your idea',
    body: 'Style, placement, rough size, and any reference you have. The more we know, the better the first sketch.',
  },
  {
    num: '02',
    title: 'We reply in 24–48 hours',
    body: 'With a quote range, an artist suggestion, and the next available dates that match your preferred days.',
  },
  {
    num: '03',
    title: 'Design and session',
    body: 'We refine the design together before you sit. Nothing goes on skin until you are certain.',
  },
]

export default function BookPage() {
  return (
    <Section
      surface="cream"
      size="none"
      className="pt-32 pb-[clamp(4rem,8vw,6.5rem)] sm:pt-36"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_minmax(0,32rem)] lg:gap-20">
          {/* Context */}
          <Reveal className="lg:pt-4">
            <SectionLabel rule className="mb-6">
              Book a Consult
            </SectionLabel>
            <h1 className="font-serif text-h1 font-light text-ink text-balance">
              Let&apos;s talk about your tattoo.
            </h1>
            <p className="mt-6 max-w-md text-lead font-sans text-muted">
              Consultations are free and there is no obligation to book a session afterwards.
            </p>

            <ol className="mt-12 flex flex-col">
              {steps.map((step) => (
                <li key={step.num} className="flex gap-6 border-t border-warm-grey py-6 last:border-b">
                  <span className="shrink-0 pt-1 text-eyebrow font-sans font-medium text-accent-ink">
                    {step.num}
                  </span>
                  <div>
                    <h2 className="font-serif text-h3 font-light text-ink">{step.title}</h2>
                    <p className="mt-2 font-sans text-[0.9375rem] leading-relaxed text-muted">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10">
              <p className="font-sans text-[0.9375rem] text-muted">
                In a hurry? Message the studio directly — open daily, {openingHours.opens} to{' '}
                {openingHours.closes}.
              </p>
              <a
                href={whatsappUrl("I'd like to book a tattoo consult at STB Studio")}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonClasses({ variant: 'outline' })} mt-5`}
              >
                WhatsApp the studio
                <ButtonArrow />
              </a>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-warm-grey bg-warm-white p-6 sm:p-9">
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
