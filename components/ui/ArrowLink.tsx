import Link from 'next/link'

const TONES = {
  light: 'text-ink/70 hover:text-ink after:bg-ink',
  dark: 'text-mist hover:text-warm-white after:bg-warm-white',
} as const

type Props = {
  href: string
  children: React.ReactNode
  tone?: keyof typeof TONES
  className?: string
}

/**
 * Quiet tertiary link: a rule that draws itself in from the left on hover,
 * plus an arrow that slides. Used for "see everything" links under a preview.
 */
export default function ArrowLink({ href, children, tone = 'light', className = '' }: Props) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center gap-2.5 pb-1.5 text-eyebrow uppercase font-sans font-medium transition-colors duration-300
        after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-100 after:opacity-30
        after:transition-opacity after:duration-300 hover:after:opacity-100
        ${TONES[tone]} ${className}`}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-300 ease-soft group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  )
}
