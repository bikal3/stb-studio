import Image from 'next/image'
import Link from 'next/link'
import SectionLabel from '@/components/SectionLabel'
import Reveal from '@/components/ui/Reveal'
import { buttonClasses, ButtonArrow } from '@/components/ui/Button'
import { artistContent } from '@/lib/content'

export default function ArtistStrip() {
  return (
    <section className="surface-ink grid items-stretch lg:grid-cols-2">
      <div className="relative min-h-[24rem] overflow-hidden lg:min-h-[40rem]">
        {/* Warm halo behind the cut-out portrait so it doesn't float on flat black. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 [background:radial-gradient(circle_at_50%_42%,rgba(196,168,130,0.16)_0%,transparent_62%)]"
        />
        <Image
          src="/images/profile-pic.png"
          alt={artistContent.name}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain object-bottom p-8 lg:p-12"
          priority
        />
      </div>

      <div className="flex flex-col justify-center px-6 py-[clamp(3.5rem,7vw,6rem)] sm:px-10 lg:px-16">
        <Reveal>
          <SectionLabel tone="dark" rule>
            Founder &amp; Tattoo Artist
          </SectionLabel>

          <h2 className="mt-6 font-serif text-h1 font-light leading-[1.1] text-warm-white">
            {artistContent.name}
          </h2>

          <blockquote className="mt-8 max-w-lg font-serif text-h3 font-light italic leading-relaxed text-accent">
            &ldquo;{artistContent.pullQuote}&rdquo;
          </blockquote>

          <p className="mt-8 max-w-lg font-sans text-body text-mist">{artistContent.studioIntro}</p>

          <ul className="mt-10 flex flex-wrap gap-2">
            {artistContent.disciplines.map((d) => (
              <li
                key={d}
                className="border border-ink-soft px-3.5 py-2 text-eyebrow uppercase font-sans text-mist"
              >
                {d}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/about" className={buttonClasses({ variant: 'solid-light' })}>
              Meet the Artist
              <ButtonArrow />
            </Link>
            <Link href="/artists" className={buttonClasses({ variant: 'outline-light' })}>
              The Full Team
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
