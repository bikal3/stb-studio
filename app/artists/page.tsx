import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import { buttonClasses, ButtonArrow } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Artists',
  description: 'Meet the tattoo artists behind STB Studio in Kathmandu, Nepal.',
}

const artists = [
  {
    name: 'Susmita',
    fullName: 'Susmita Tamang Bhandari',
    role: 'Founder & Lead Artist',
    photo: '/images/profile-pic.png',
    specialty: 'Fine Line · Floral · Micro Realism',
    bio: 'Founder and lead artist of STB Studio. Susmita has been crafting custom tattoos in Kathmandu for years. Her work reflects a belief that every tattoo is a story — personal, permanent, and powerful.',
  },
  {
    name: 'Aarav',
    fullName: 'Aarav Shrestha',
    role: 'Tattoo Artist',
    photo: '/images/fine-line/IMG_8814.JPG',
    specialty: 'Blackwork · Geometric · Old School',
    bio: 'Aarav brings bold precision to every piece. With a background in graphic design, he specialises in blackwork and geometric patterns that are clean, intentional, and built to last a lifetime.',
  },
  {
    name: 'Priya',
    fullName: 'Priya Rai',
    role: 'Tattoo Artist',
    photo: '/images/colour-tattoo/IMG_8807.JPG',
    specialty: 'Colour · Watercolour · Illustrative',
    bio: 'Priya is known for her vibrant colour work and illustrative style. She approaches each tattoo like a painting — layering colour and texture to create pieces that feel alive on the skin.',
  },
  {
    name: 'Rohan',
    fullName: 'Rohan Gurung',
    role: 'Tattoo Artist',
    photo: '/images/black-and-grey/IMG_8862.jpg',
    specialty: 'Black & Grey · Portrait · Realism',
    bio: 'Rohan specialises in hyper-realistic black and grey tattoos. His portraits capture emotion with stunning accuracy, making him the go-to artist for memorial pieces and detailed realism.',
  },
  {
    name: 'Maya',
    fullName: 'Maya Tamang',
    role: 'Tattoo Artist',
    photo: '/images/floral/IMG_8824.jpg',
    specialty: 'Floral · Mandala · Dotwork',
    bio: 'Maya draws inspiration from nature and sacred geometry. Her intricate mandala and dotwork pieces have a meditative quality — each dot placed with intention, each petal drawn with care.',
  },
  {
    name: 'Kiran',
    fullName: 'Kiran Lama',
    role: 'Tattoo Artist',
    photo: '/images/micro-realism/IMG_8808.jpg',
    specialty: 'Micro Realism · Fine Detail · Minimalist',
    bio: 'Kiran is a master of the small scale. Working in micro realism and minimalist styles, he proves that the most powerful tattoos are often the ones that say the most with the least.',
  },
]

export default function ArtistsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Team"
        title="Artists"
        lead="Six hands, six styles, one studio. Ask for the artist whose work speaks to you — or let us match you."
      />

      <Section surface="white">
        <Container>
          <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {artists.map((artist, i) => (
              <Reveal as="li" key={artist.fullName} delay={(i % 3) * 90} className="flex flex-col">
                <div className="group relative aspect-[4/5] overflow-hidden bg-ink">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 [background:radial-gradient(circle_at_50%_40%,rgba(196,168,130,0.14)_0%,transparent_65%)]"
                  />
                  <Image
                    src={artist.photo}
                    alt={artist.fullName}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 ease-soft group-hover:scale-[1.04]"
                  />
                  <span className="absolute bottom-0 left-0 bg-ink px-3 py-2 text-eyebrow uppercase font-sans text-accent">
                    {artist.role}
                  </span>
                </div>

                <h2 className="mt-6 font-serif text-h3 font-light text-ink">{artist.fullName}</h2>
                <p className="mt-2 text-eyebrow uppercase font-sans font-medium text-accent-ink">
                  {artist.specialty}
                </p>
                <p className="mt-4 font-sans text-[0.9375rem] leading-relaxed text-muted">
                  {artist.bio}
                </p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section surface="ink" size="sm">
        <Container>
          <Reveal className="flex flex-col items-center gap-7 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h2 className="font-serif text-h2 font-light italic text-warm-white">
                Not sure who to book?
              </h2>
              <p className="mt-3 max-w-md font-sans text-body text-mist">
                Send us your idea and we&apos;ll pair you with the artist who fits it best.
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
