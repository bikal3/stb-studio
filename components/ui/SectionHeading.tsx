import type { ReactNode } from 'react'
import SectionLabel from '@/components/SectionLabel'

type Props = {
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  /** Dark surfaces flip the label and lead colours. */
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
  as?: 'h1' | 'h2'
  className?: string
  id?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = 'light',
  align = 'left',
  as: Tag = 'h2',
  className = '',
  id,
}: Props) {
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'flex flex-col items-center text-center' : ''} ${className}`}>
      {eyebrow && (
        <SectionLabel tone={tone === 'dark' ? 'dark' : 'light'} rule={!centered} className="mb-5">
          {eyebrow}
        </SectionLabel>
      )}
      <Tag
        id={id}
        className={`font-serif font-light text-balance ${Tag === 'h1' ? 'text-h1' : 'text-h2'} ${
          tone === 'dark' ? 'text-warm-white' : 'text-ink'
        }`}
      >
        {title}
      </Tag>
      {lead && (
        <p
          className={`mt-5 text-lead font-sans ${centered ? 'max-w-2xl' : 'max-w-xl'} ${
            tone === 'dark' ? 'text-mist' : 'text-muted'
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  )
}
