const BASE =
  'group inline-flex items-center justify-center gap-2.5 font-sans uppercase text-eyebrow font-medium ' +
  'transition-[background-color,color,border-color,transform] duration-300 ease-soft ' +
  'active:translate-y-px whitespace-nowrap'

const SIZES = {
  sm: 'px-5 py-2.5',
  md: 'px-7 py-3.5',
  lg: 'px-9 py-4.5',
} as const

const VARIANTS = {
  /** Filled, for the single most important action on a light surface. */
  solid: 'bg-ink text-warm-white border border-ink hover:bg-ink-light hover:border-ink-light',
  /** Filled, for the most important action on a dark surface. */
  'solid-light':
    'bg-warm-white text-ink border border-warm-white hover:bg-accent hover:border-accent',
  /** Outlined, light surface. */
  outline: 'border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-warm-white',
  /** Outlined, dark surface. */
  'outline-light':
    'border border-warm-white/40 text-warm-white hover:border-warm-white hover:bg-warm-white hover:text-ink',
} as const

type Options = {
  variant?: keyof typeof VARIANTS
  size?: keyof typeof SIZES
  className?: string
}

/**
 * Returns the class string for a call to action. Kept as a function rather
 * than a component so the same styling works on `<a>`, `<button>`, and
 * next/link without polymorphic prop gymnastics.
 */
export function buttonClasses({ variant = 'solid', size = 'md', className = '' }: Options = {}) {
  return `${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`.trim()
}

/** Arrow glyph that slides on hover. Pair with `buttonClasses` or ArrowLink. */
export function ButtonArrow() {
  return (
    <span
      aria-hidden="true"
      className="transition-transform duration-300 ease-soft group-hover:translate-x-1"
    >
      →
    </span>
  )
}
