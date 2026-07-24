import Link from 'next/link'
import Container from '@/components/ui/Container'
import SectionLabel from '@/components/SectionLabel'
import { buttonClasses, ButtonArrow } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="surface-ink flex min-h-[80vh] items-center pt-24">
      <Container width="narrow">
        <div className="flex flex-col items-center text-center">
          <SectionLabel tone="dark">Error 404</SectionLabel>
          <p className="mt-8 font-serif text-display font-light italic text-warm-white">404</p>
          <h1 className="mt-4 font-serif text-h2 font-light text-warm-white text-balance">
            This page left no trace.
          </h1>
          <p className="mt-6 max-w-md text-lead font-sans text-mist">
            The link may be old, or the page may have moved. The portfolio is still where you left
            it.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/gallery" className={buttonClasses({ variant: 'solid-light', size: 'lg' })}>
              View the gallery
              <ButtonArrow />
            </Link>
            <Link href="/" className={buttonClasses({ variant: 'outline-light', size: 'lg' })}>
              Back home
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
