import type { ReactNode } from 'react'
import SectionLabel from '@/components/SectionLabel'

type Props = {
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  /** Dark surfaces flip the label and lead colours. */
  tone?: 'light' | 'dark'
}

export default function SectionHeading({ eyebrow, title, lead, tone = 'light' }: Props) {
  return (
    <div>
      {eyebrow && (
        <SectionLabel tone={tone} rule className="mb-5">
          {eyebrow}
        </SectionLabel>
      )}
      <h2
        className={`font-serif font-light text-h2 text-balance ${
          tone === 'dark' ? 'text-warm-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 max-w-xl text-lead font-sans ${
            tone === 'dark' ? 'text-mist' : 'text-muted'
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  )
}
