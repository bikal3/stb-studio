import SectionLabel from '@/components/SectionLabel'
import { aftercareInstructions, touchUpPolicy, noRefundPolicy, aftercareIntro, aftercareSignOff } from '@/lib/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aftercare — STB Studio',
  description:
    'Tattoo aftercare instructions, touch-up policy, and refund policy for STB Studio clients.',
}

export default function AftercarePage() {
  return (
    <div>
      <section className="bg-cream px-8 py-12">
        <SectionLabel className="mb-2">Care</SectionLabel>
        <h1 className="font-serif italic font-light text-4xl text-ink">Aftercare</h1>
        <p className="text-sm text-muted font-sans mt-3 max-w-sm leading-relaxed">
          {aftercareIntro}
        </p>
      </section>

      <section className="px-8 py-12 max-w-2xl">
        <SectionLabel className="mb-4">Instructions</SectionLabel>
        <ol className="flex flex-col gap-4">
          {aftercareInstructions.map((instruction, i) => (
            <li key={i} className="flex gap-4">
              <span className="text-[11px] text-accent font-sans font-semibold mt-0.5 flex-shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-sm font-sans text-ink leading-relaxed">{instruction}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm font-sans text-ink font-medium tracking-wide">
          {aftercareSignOff}
        </p>
      </section>

      <section className="bg-cream-dark px-8 py-12 max-w-2xl">
        <SectionLabel className="mb-4">Touch-Up Policy</SectionLabel>
        <ul className="flex flex-col gap-3">
          {touchUpPolicy.map((point, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" />
              <p className="text-sm font-sans text-ink leading-relaxed">{point}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-ink px-8 py-10">
        <SectionLabel className="mb-3">Refund Policy</SectionLabel>
        <p className="text-sm font-sans text-warm-grey leading-relaxed max-w-xl">
          {noRefundPolicy}
        </p>
      </section>
    </div>
  )
}
