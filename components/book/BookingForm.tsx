'use client'

import { useState } from 'react'
import { bookingMailtoUrl, BOOKING_EMAIL } from '@/lib/links'

type Status = 'idle' | 'success'

export default function BookingForm() {
  const [status, setStatus] = useState<Status>('idle')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = data.get('name') as string
    const email = data.get('email') as string
    const style = data.get('style') as string
    const placement = data.get('placement') as string
    const message = (data.get('message') as string) ?? ''

    window.location.href = bookingMailtoUrl(name, email, style, placement, message)
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <p className="font-serif italic text-xl text-ink mb-2">Thank you.</p>
        <p className="text-sm font-sans text-muted">Your email client should have opened. Susmita will be in touch within 24–48 hours.</p>
      </div>
    )
  }

  const inputClass = 'border border-warm-grey px-3 py-2 text-sm font-sans text-ink bg-white focus:outline-none focus:border-accent w-full'

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
      aria-label="Booking form"
    >
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        className={inputClass}
      />
      <input
        type="email"
        name="email"
        placeholder="Email address"
        required
        className={inputClass}
      />
      <select
        name="style"
        required
        defaultValue=""
        className={inputClass}
      >
        <option value="" disabled>Style preference</option>
        <option value="Fineline">Fineline</option>
        <option value="Mandala">Mandala</option>
        <option value="Blackwork">Blackwork</option>
        <option value="Not sure yet">Not sure yet</option>
      </select>
      <input
        type="text"
        name="placement"
        placeholder="Placement (e.g. inner forearm)"
        required
        className={inputClass}
      />
      <textarea
        name="message"
        placeholder="Tell Susmita about your idea..."
        rows={4}
        className={`${inputClass} resize-none`}
      />
      <button
        type="submit"
        className="bg-ink text-warm-white text-[10px] tracking-[2px] uppercase font-sans px-4 py-3 hover:bg-ink-light transition-colors"
      >
        Send Request
      </button>
      <p className="text-[11px] font-sans text-muted mt-2">
        Or email directly:{' '}
        <a
          href={`mailto:${BOOKING_EMAIL}`}
          className="underline hover:text-ink transition-colors"
        >
          {BOOKING_EMAIL}
        </a>
      </p>
    </form>
  )
}
