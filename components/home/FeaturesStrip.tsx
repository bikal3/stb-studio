import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'

const features = [
  {
    num: '01',
    title: 'Tattoos',
    description:
      "Every tattoo tells a story. Whether it's your vision, your memory, or your favourite design, our artists bring it to life with creativity, precision, and care. Any style, any design — customized the way you want it.",
  },
  {
    num: '02',
    title: 'Custom Engraving',
    description:
      'Your ideas, gently engraved on phone cases and mirrors. Quietly personal, made just for you — crafted only after your order.',
  },
  {
    num: '03',
    title: 'Quality & Safety',
    description:
      'Where hygiene meets creativity. We maintain a clean, comfortable environment with sterilised equipment, while our artists thoughtfully work with your ideas to create satisfying results.',
  },
  {
    num: '04',
    title: 'STB Limited Drops',
    description:
      'Carefully detailed mandala artworks inspired by elements, energy and identity. Quietly expressive, each piece is created with meaning and intention. Strictly 1 of 1 — with title and authenticity note.',
  },
]

export default function FeaturesStrip() {
  return (
    <Section id="studio" surface="cream">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The Studio"
            title="Four ways we work"
            lead="A tattoo sanctuary in Kathmandu — part studio, part workshop, part gallery."
          />
        </Reveal>

        <div className="mt-14 grid gap-px bg-warm-grey sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 90}
              className="group bg-cream p-7 transition-colors duration-500 hover:bg-warm-white lg:p-8"
            >
              <p className="text-eyebrow font-sans font-medium text-accent-ink">{f.num}</p>
              <span
                aria-hidden="true"
                className="mt-4 block h-px w-8 origin-left bg-accent-ink/40 transition-transform duration-500 ease-soft group-hover:scale-x-[2.5]"
              />
              <h3 className="mt-5 font-serif text-h3 font-light text-ink">{f.title}</h3>
              <p className="mt-3 font-sans text-[0.9375rem] leading-relaxed text-muted">
                {f.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
