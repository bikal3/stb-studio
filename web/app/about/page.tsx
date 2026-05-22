import SectionLabel from '@/components/SectionLabel'
import PlaceholderImage from '@/components/PlaceholderImage'
import { artistContent, tattooHistoryContent, studioServiceContent, beYourselfContent } from '@/lib/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — STB Studio',
  description:
    'Learn about Susmita Tamang Bomjan and the philosophy behind STB Studio in Kathmandu.',
}

export default function AboutPage() {
  return (
    <div>
      {/* Artist hero */}
      <section className="bg-cream px-8 py-16 flex gap-8 items-center">
        <PlaceholderImage className="w-32 h-32 rounded-full flex-shrink-0" />
        <div>
          <SectionLabel className="mb-2">The Artist</SectionLabel>
          <h1 className="font-serif italic font-light text-4xl text-ink leading-tight">
            {artistContent.name}
          </h1>
        </div>
      </section>

      {/* Bio */}
      <section className="px-8 py-12 max-w-2xl">
        <SectionLabel className="mb-3">Story</SectionLabel>
        <p className="text-sm font-sans text-ink leading-[1.9]">{artistContent.bio}</p>
        <blockquote className="mt-6 font-serif italic text-xl text-ink-light leading-relaxed border-l-2 border-accent pl-4">
          {artistContent.sanctuaryQuote}
        </blockquote>
      </section>

      {/* Philosophy */}
      <section className="bg-cream-dark px-8 py-12 max-w-2xl">
        <SectionLabel className="mb-3">Philosophy</SectionLabel>
        <p className="text-sm font-sans text-ink leading-[1.9]">{artistContent.philosophy}</p>
      </section>

      {/* The Studio */}
      <section className="px-8 py-12 max-w-2xl">
        <SectionLabel className="mb-3">The Studio</SectionLabel>
        <p className="text-sm font-sans text-ink leading-[1.9] mb-4">{studioServiceContent.intro}</p>
        <p className="text-sm font-sans text-ink leading-[1.9]">{studioServiceContent.detail}</p>
      </section>

      {/* Tattoo history */}
      <section className="bg-ink-light px-8 py-12">
        <SectionLabel className="mb-3">History</SectionLabel>
        <h2 className="font-serif italic font-light text-2xl text-warm-white mb-6">{tattooHistoryContent.heading}</h2>
        <p className="text-sm font-sans text-warm-grey leading-[1.9] mb-4">{tattooHistoryContent.intro}</p>
        <h3 className="font-serif italic text-warm-white text-lg mt-6 mb-3">{tattooHistoryContent.nepalHeading}</h3>
        <p className="text-sm font-sans text-warm-grey leading-[1.9] mb-4">{tattooHistoryContent.nepal}</p>
        <p className="text-sm font-sans text-warm-grey leading-[1.9]">{tattooHistoryContent.today}</p>
      </section>

      {/* Be unapologetically you */}
      <section className="px-8 py-12 text-center max-w-xl mx-auto">
        <h2 className="font-serif italic font-light text-3xl text-ink mb-4">
          {beYourselfContent.heading}
        </h2>
        <p className="text-sm font-sans text-muted leading-[1.9]">
          {beYourselfContent.body}
        </p>
      </section>
    </div>
  )
}
