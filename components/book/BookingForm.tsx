'use client'

import { useState } from 'react'
import { bookingMailtoUrl, BOOKING_EMAIL } from '@/lib/links'

type Status = 'idle' | 'success'

export default function BookingForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [daysError, setDaysError] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const selectedDays = data.getAll('days') as string[]

    if (selectedDays.length === 0) {
      setDaysError(true)
      return
    }

    const name = data.get('name') as string
    const email = data.get('email') as string
    const style = data.get('style') as string
    const placement = data.get('placement') as string
    const days = selectedDays.join(', ')
    const message = (data.get('message') as string) ?? ''

    window.location.href = bookingMailtoUrl(name, email, style, placement, days, message)
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
      <fieldset>
        <legend className="text-[11px] font-sans text-muted uppercase tracking-[1px] mb-2">
          Preferred days <span className="text-accent">*</span>
        </legend>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
            <label key={day} className="flex items-center gap-1.5 text-sm font-sans text-ink cursor-pointer">
              <input
                type="checkbox"
                name="days"
                value={day}
                onChange={() => setDaysError(false)}
                className="accent-ink w-3.5 h-3.5"
              />
              {day}
            </label>
          ))}
        </div>
        {daysError && (
          <p className="text-[11px] font-sans text-red-500 mt-1.5">Please select at least one preferred day.</p>
        )}
      </fieldset>
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
