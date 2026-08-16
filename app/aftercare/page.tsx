import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import {
  aftercareInstructions,
  touchUpPolicy,
  noRefundPolicy,
  aftercareIntro,
  aftercareSignOff,
} from '@/lib/content'

export const metadata: Metadata = {
  title: 'Aftercare',
  description:
    'Tattoo aftercare instructions, touch-up policy, and refund policy for STB Studio clients.',
  alternates: { canonical: '/aftercare' },
}

export default function AftercarePage() {
  return (
    <>
      <PageHeader eyebrow="Care" title="Aftercare" lead={aftercareIntro} />

      <Section surface="white">
        <Container width="narrow">
          <Reveal>
            <SectionHeading eyebrow="Instructions" title="Healing your new ink" />
          </Reveal>

          <ol className="mt-10 flex flex-col">
            {aftercareInstructions.map((instruction, i) => (
              <Reveal
                as="li"
                key={instruction}
                delay={i * 60}
                className="flex gap-6 border-t border-warm-grey py-6 last:border-b"
              >
                <span className="shrink-0 pt-0.5 font-serif text-h3 font-light text-accent-ink tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-sans text-body text-ink/85">{instruction}</p>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-10 border-l-2 border-accent-ink bg-cream px-6 py-5">
            <p className="text-eyebrow uppercase font-sans font-medium text-accent-ink">
              {aftercareSignOff}
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section surface="cream-dark">
        <Container width="narrow">
          <Reveal>
            <SectionHeading
              eyebrow="Touch-Up Policy"
              title="What's covered, and when"
              lead="One complimentary touch-up within three months, subject to the conditions below."
            />
          </Reveal>

          <ul className="mt-10 flex flex-col gap-4">
            {touchUpPolicy.map((point, i) => (
              <Reveal as="li" key={point} delay={i * 60} className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-3 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent-ink"
                />
                <p className="font-sans text-body text-ink/85">{point}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section surface="ink" size="sm">
        <Container width="narrow">
          <Reveal>
            <SectionHeading tone="dark" eyebrow="Refund Policy" title="All sales are final" />
            <p className="mt-6 max-w-2xl font-sans text-body text-mist">{noRefundPolicy}</p>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
