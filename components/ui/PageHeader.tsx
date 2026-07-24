import type { ReactNode } from 'react'
import Container from '@/components/ui/Container'
import SectionLabel from '@/components/SectionLabel'

type Props = {
  eyebrow: string
  title: string
  lead?: ReactNode
  children?: ReactNode
}

/**
 * Masthead for every non-home page. Carries the top padding that clears the
 * fixed navbar, so pages never have to know the header's height.
 */
export default function PageHeader({ eyebrow, title, lead, children }: Props) {
  return (
    <header className="bg-cream pt-32 pb-[clamp(2.5rem,6vw,4.5rem)] sm:pt-36">
      <Container>
        <SectionLabel rule className="mb-6">
          {eyebrow}
        </SectionLabel>
        <h1 className="font-serif font-light text-h1 text-ink text-balance">{title}</h1>
        {lead && <p className="mt-6 max-w-2xl text-lead font-sans text-muted">{lead}</p>}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </header>
  )
}
