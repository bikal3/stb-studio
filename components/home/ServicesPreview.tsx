import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import ArrowLink from '@/components/ui/ArrowLink'
import Reveal from '@/components/ui/Reveal'
import { servicesPreview } from '@/lib/content'

export default function ServicesPreview() {
  return (
    <Section surface="cream-dark">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="What we offer"
            lead="Three tattoo sessions to start from — plus objects, collaborations and limited drops on the full menu."
          />
        </Reveal>

        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {servicesPreview.map((service, i) => (
            <Reveal
              key={service.name}
              delay={i * 90}
              as="article"
              className="group relative flex flex-col bg-warm-white p-7 transition-transform duration-500 ease-soft hover:-translate-y-1"
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-100 bg-accent-ink/35 transition-colors duration-500 group-hover:bg-accent-ink"
              />
              <h3 className="font-serif text-h3 font-light text-ink">{service.name}</h3>
              <p className="mt-3 flex-1 font-sans text-[0.9375rem] leading-relaxed text-muted">
                {service.description}
              </p>
              <div className="mt-6 flex items-baseline justify-between gap-4 border-t border-warm-grey pt-4">
                <span className="text-eyebrow uppercase font-sans text-muted">
                  {service.duration ?? 'By enquiry'}
                </span>
                <span className="font-sans text-[0.9375rem] font-medium text-accent-ink">
                  {service.price}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10">
          <ArrowLink href="/services">See the full menu</ArrowLink>
        </Reveal>
      </Container>
    </Section>
  )
}
