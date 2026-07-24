import type { ReactNode } from 'react'

const SURFACES = {
  white: 'bg-warm-white text-ink',
  cream: 'bg-cream text-ink',
  'cream-dark': 'bg-cream-dark text-ink',
  ink: 'surface-ink',
  none: '',
} as const

/** One vertical rhythm for the whole site, so sections never drift apart. */
const SIZES = {
  sm: 'py-[clamp(2.5rem,5vw,4rem)]',
  md: 'py-[clamp(4rem,8vw,6.5rem)]',
  lg: 'py-[clamp(5rem,11vw,9rem)]',
  /** Opt out when the section sets its own padding (e.g. to clear the navbar). */
  none: '',
} as const

type Props = {
  children: ReactNode
  surface?: keyof typeof SURFACES
  size?: keyof typeof SIZES
  id?: string
  className?: string
  'aria-labelledby'?: string
}

export default function Section({
  children,
  surface = 'white',
  size = 'md',
  id,
  className = '',
  ...rest
}: Props) {
  return (
    <section id={id} className={`${SURFACES[surface]} ${SIZES[size]} ${className}`} {...rest}>
      {children}
    </section>
  )
}
