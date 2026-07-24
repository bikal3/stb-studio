import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import { philosophyQuoteContent } from '@/lib/content'

export default function PhilosophyQuote() {
  return (
    <Section surface="cream" size="lg">
      <Container width="narrow">
        <Reveal className="flex flex-col items-center text-center">
          <span
            aria-hidden="true"
            className="font-serif text-[5rem] leading-[0.5] text-accent-ink/35 select-none"
          >
            &ldquo;
          </span>
          <blockquote className="mt-8 font-serif text-h2 font-light italic leading-[1.35] text-ink text-balance">
            {philosophyQuoteContent.quote}
          </blockquote>
          <div aria-hidden="true" className="mt-10 h-px w-10 bg-warm-grey" />
          <p className="mt-6 text-eyebrow uppercase font-sans font-medium text-muted">
            {philosophyQuoteContent.attribution}
          </p>
        </Reveal>
      </Container>
    </Section>
  )
}
