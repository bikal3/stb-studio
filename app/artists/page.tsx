import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import SectionLabel from '@/components/SectionLabel'
import Reveal from '@/components/ui/Reveal'
import { buttonClasses, ButtonArrow } from '@/components/ui/Button'
import { artistContent, ARTIST_NAME } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Artists',
  description: `Meet ${ARTIST_NAME}, founder and tattoo artist at STB Studio in Kathmandu, Nepal.`,
  alternates: { canonical: '/artists' },
}

export default function ArtistsPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Team"
        title="Artists"
        lead="STB Studio is a single-artist studio. Every design is drawn, and every piece tattooed, by Susmita herself — so the hand you book is the hand you sit with."
      />

      <Section surface="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[22rem_1fr] lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 [background:radial-gradient(circle_at_50%_40%,rgba(196,168,130,0.16)_0%,transparent_65%)]"
                />
                <Image
                  src="/images/profile-pic.png"
                  alt={ARTIST_NAME}
                  fill
                  sizes="(max-width: 1024px) 100vw, 22rem"
                  className="object-contain object-bottom p-6"
                />
                <span className="absolute bottom-0 left-0 bg-ink px-3 py-2 text-eyebrow uppercase font-sans text-accent">
                  Founder &amp; Lead Artist
                </span>
              </div>
            </Reveal>

            <Reveal delay={100} className="max-w-[64ch]">
              <SectionLabel rule className="mb-6">
                The Artist
              </SectionLabel>
              <h2 className="font-serif text-h1 font-light text-ink text-balance">{ARTIST_NAME}</h2>

              <ul className="mt-7 flex flex-wrap gap-2">
                {artistContent.disciplines.map((discipline) => (
                  <li
                    key={discipline}
                    className="border border-warm-grey px-3.5 py-2 text-eyebrow uppercase font-sans text-muted"
                  >
                    {discipline}
                  </li>
                ))}
              </ul>

              <p className="mt-8 font-sans text-body text-ink/85">{artistContent.studioIntro}</p>

              <blockquote className="my-9 border-l-2 border-accent-ink pl-6 font-serif text-h3 font-light italic leading-relaxed text-ink">
                {artistContent.pullQuote}
              </blockquote>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/book" className={buttonClasses()}>
                  Book a Consult
                  <ButtonArrow />
                </Link>
                <Link href="/about" className={buttonClasses({ variant: 'outline' })}>
                  Read her story
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section surface="ink" size="sm">
        <Container>
          <Reveal className="flex flex-col items-center gap-7 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h2 className="font-serif text-h2 font-light italic text-warm-white">
                Have an idea in mind?
              </h2>
              <p className="mt-3 max-w-md font-sans text-body text-mist">
                Send it over with a rough size and placement, and Susmita will come back to you with
                a quote and the next available dates.
              </p>
            </div>
            <Link href="/book" className={buttonClasses({ variant: 'solid-light', size: 'lg' })}>
              Book a Consult
              <ButtonArrow />
            </Link>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
