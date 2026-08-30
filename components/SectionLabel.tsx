import type { ReactNode } from 'react'

const TONES = {
  /** On light surfaces. Falls back to the AA-safe bronze. */
  light: 'text-accent-ink',
  /** On dark surfaces. */
  dark: 'text-accent',
} as const

type Props = {
  children: ReactNode
  tone?: keyof typeof TONES
  /** Draws a short rule before the label. */
  rule?: boolean
  className?: string
}

export default function SectionLabel({
  children,
  tone = 'light',
  rule = false,
  className = '',
}: Props) {
  return (
    <p
      className={`flex items-center gap-3 text-eyebrow uppercase font-sans font-medium ${TONES[tone]} ${className}`}
    >
      {rule && <span aria-hidden="true" className="h-px w-8 bg-current opacity-50" />}
      {children}
    </p>
  )
}
