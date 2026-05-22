import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: Props) {
  return (
    <p className={`text-[11px] tracking-[4px] text-muted uppercase font-sans ${className}`}>
      {children}
    </p>
  )
}
