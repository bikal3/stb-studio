import type { ReactNode } from 'react'

const WIDTHS = {
  wide: 'max-w-[88rem]',
  default: 'max-w-6xl',
  narrow: 'max-w-3xl',
  /** Long-form copy — capped by measure rather than pixels. */
  prose: 'max-w-[64ch]',
} as const

type Props = {
  children: ReactNode
  width?: keyof typeof WIDTHS
  className?: string
}

export default function Container({ children, width = 'default', className = '' }: Props) {
  return (
    <div className={`mx-auto w-full px-6 sm:px-8 ${WIDTHS[width]} ${className}`}>{children}</div>
  )
}
