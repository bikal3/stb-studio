import BookingForm from '@/components/book/BookingForm'
import SectionLabel from '@/components/SectionLabel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Consult — STB Studio',
  description: 'Book a tattoo consultation with Susmita Tamang Bomjan at STB Studio, Kathmandu.',
}

export default function BookPage() {
  return (
    <section className="min-h-screen bg-cream px-6 py-16">
      <div className="max-w-md mx-auto bg-white border border-warm-grey px-8 py-10">
        <SectionLabel className="mb-3">Book a Consult</SectionLabel>
        <h1 className="font-serif italic font-light text-3xl text-ink mb-8 leading-snug">
          Let&apos;s talk about<br />your tattoo.
        </h1>
        <BookingForm />
      </div>
    </section>
  )
}
