import type { ReactNode } from 'react'

const WIDTHS = {
  default: 'max-w-6xl',
  narrow: 'max-w-3xl',
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
