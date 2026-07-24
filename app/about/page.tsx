import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import SectionLabel from '@/components/SectionLabel'
import Reveal from '@/components/ui/Reveal'
import { buttonClasses, ButtonArrow } from '@/components/ui/Button'
import {
  artistContent,
  tattooHistoryContent,
  studioServiceContent,
  beYourselfContent,
} from '@/lib/content'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Susmita Tamang Bhandari and the philosophy behind STB Studio in Kathmandu.',
}

const prose = 'font-sans text-body text-ink/85'

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Artist"
        title={artistContent.name}
        lead={artistContent.pullQuote}
      />

      {/* Story — portrait alongside the long-form bio so the text keeps a
          readable measure instead of running the full page width. */}
      <Section surface="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[22rem_1fr] lg:gap-16">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 [background:radial-gradient(circle_at_50%_40%,rgba(196,168,130,0.18)_0%,transparent_65%)]"
                />
                <Image
                  src="/images/profile-pic.png"
                  alt={artistContent.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 22rem"
                  className="object-contain object-bottom p-6"
                  priority
                />
              </div>
              <p className="mt-5 text-eyebrow uppercase font-sans text-muted">
                Founder · STB Studio · Kathmandu
              </p>
            </Reveal>

            <Reveal delay={100} className="max-w-[64ch]">
              <SectionLabel rule className="mb-6">
                Story
              </SectionLabel>
              <p className={prose}>{artistContent.bio}</p>

              <blockquote className="my-10 border-l-2 border-accent-ink pl-6 font-serif text-h3 font-light italic leading-relaxed text-ink">
                {artistContent.sanctuaryQuote}
              </blockquote>

              <p className={prose}>{artistContent.visionStatement}</p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Philosophy — the three-colour idea, made visual. */}
      <Section surface="ink">
        <Container>
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Philosophy"
              title="Black, white and grey"
              lead={artistContent.philosophy}
            />
          </Reveal>

          <dl className="mt-14 grid gap-px bg-ink-soft sm:grid-cols-3">
            {[
              { swatch: 'bg-ink border border-ink-soft', term: 'Black', desc: 'Risk' },
              { swatch: 'bg-warm-white', term: 'White', desc: 'Opportunity' },
              { swatch: 'bg-mist', term: 'Grey', desc: 'Magic' },
            ].map((item, i) => (
              <Reveal key={item.term} delay={i * 110} className="bg-ink p-8">
                <span aria-hidden="true" className={`block h-16 w-16 ${item.swatch}`} />
                <dt className="mt-6 font-serif text-h3 font-light text-warm-white">{item.term}</dt>
                <dd className="mt-1 text-eyebrow uppercase font-sans text-accent">{item.desc}</dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </Section>

      {/* The studio */}
      <Section surface="cream">
        <Container width="narrow">
          <Reveal>
            <SectionHeading eyebrow="The Studio" title="Clean, calm, and yours for the session" />
            <div className="mt-8 flex flex-col gap-5">
              <p className={prose}>{studioServiceContent.intro}</p>
              <p className={prose}>{studioServiceContent.detail}</p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Tattoo history */}
      <Section surface="white">
        <Container width="narrow">
          <Reveal>
            <SectionHeading eyebrow="History" title={tattooHistoryContent.heading} />
            <p className={`mt-8 ${prose}`}>{tattooHistoryContent.intro}</p>

            <h3 className="mt-12 font-serif text-h3 font-light text-ink">
              {tattooHistoryContent.nepalHeading}
            </h3>
            <p className={`mt-4 ${prose}`}>{tattooHistoryContent.nepal}</p>
            <p className={`mt-5 ${prose}`}>{tattooHistoryContent.today}</p>
          </Reveal>
        </Container>
      </Section>

      {/* Closing statement */}
      <Section surface="cream-dark" size="lg">
        <Container width="narrow">
          <Reveal className="flex flex-col items-center text-center">
            <h2 className="font-serif text-h1 font-light italic text-ink text-balance">
              {beYourselfContent.heading}
            </h2>
            <p className="mt-7 max-w-xl text-lead font-sans text-muted">
              {beYourselfContent.body}
            </p>
            <Link href="/book" className={`${buttonClasses({ size: 'lg' })} mt-10`}>
              Book a Consult
              <ButtonArrow />
            </Link>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
