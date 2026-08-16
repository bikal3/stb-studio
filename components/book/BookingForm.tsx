'use client'

import { useState } from 'react'
import { bookingMailtoUrl, whatsappUrl, BOOKING_EMAIL } from '@/lib/links'
import { buttonClasses, ButtonArrow } from '@/components/ui/Button'

type Status = 'idle' | 'handed-off'

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const fieldClass =
  'w-full border border-warm-grey bg-warm-white px-4 py-3 font-sans text-[0.9375rem] text-ink ' +
  'placeholder:text-muted transition-colors duration-200 focus:border-accent-ink focus:outline-none'

const labelClass = 'block text-eyebrow uppercase font-sans font-medium text-muted'

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
    setStatus('handed-off')
  }

  // The form has no server behind it — it hands the request to the visitor's
  // own mail app. That can silently fail (no mail client configured, common on
  // mobile), so this step says what actually happened and offers a way through
  // rather than claiming the request was sent.
  if (status === 'handed-off') {
    return (
      <div className="flex flex-col items-center py-10 text-center" role="status">
        <span aria-hidden="true" className="mb-6 h-px w-10 bg-accent-ink" />
        <p className="font-serif text-h2 font-light italic text-ink">One last step.</p>
        <p className="mt-4 max-w-sm font-sans text-body text-muted">
          Your email app should have opened with the request filled in. It is not sent until you
          press send there — then Susmita will reply within 24–48 hours.
        </p>
        <p className="mt-6 max-w-sm font-sans text-[0.9375rem] text-muted">
          Nothing opened? Reach the studio directly:
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappUrl("I'd like to book a tattoo consult at STB Studio")}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses()}
          >
            WhatsApp
            <ButtonArrow />
          </a>
          <a href={`mailto:${BOOKING_EMAIL}`} className={buttonClasses({ variant: 'outline' })}>
            {BOOKING_EMAIL}
          </a>
        </div>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-7 font-sans text-[0.8125rem] text-muted underline decoration-warm-grey underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
        >
          Back to the form
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" aria-label="Booking form">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="booking-name" className={labelClass}>
            Name
          </label>
          <input
            id="booking-name"
            type="text"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            required
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="booking-email" className={labelClass}>
            Email
          </label>
          <input
            id="booking-email"
            type="email"
            name="email"
            placeholder="Email address"
            autoComplete="email"
            required
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="booking-style" className={labelClass}>
            Style
          </label>
          <div className="relative">
            <select
              id="booking-style"
              name="style"
              required
              defaultValue=""
              className={`${fieldClass} appearance-none pr-10`}
            >
              <option value="" disabled>
                Style preference
              </option>
              <option value="Fineline">Fineline</option>
              <option value="Mandala">Mandala</option>
              <option value="Blackwork">Blackwork</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
            <svg
              aria-hidden="true"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
            >
              <path d="M1 1.5 6 6.5l5-5" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="booking-placement" className={labelClass}>
            Placement
          </label>
          <input
            id="booking-placement"
            type="text"
            name="placement"
            placeholder="Placement (e.g. inner forearm)"
            required
            className={fieldClass}
          />
        </div>
      </div>

      <fieldset>
        <legend className={`${labelClass} mb-3`}>
          Preferred days <span className="text-accent-ink">*</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {DAYS.map((day) => (
            <label key={day} className="cursor-pointer">
              <input
                type="checkbox"
                name="days"
                value={day}
                onChange={() => setDaysError(false)}
                aria-invalid={daysError || undefined}
                aria-describedby={daysError ? 'booking-days-error' : undefined}
                className="peer sr-only"
              />
              <span className="block border border-warm-grey px-4 py-2.5 font-sans text-[0.8125rem] text-muted transition-colors duration-200 hover:border-ink hover:text-ink peer-checked:border-ink peer-checked:bg-ink peer-checked:text-warm-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent-ink">
                {day}
              </span>
            </label>
          ))}
        </div>
        {daysError && (
          <p id="booking-days-error" role="alert" className="mt-3 font-sans text-[0.8125rem] text-red-700">
            Please select at least one preferred day.
          </p>
        )}
      </fieldset>

      <div className="flex flex-col gap-2">
        <label htmlFor="booking-message" className={labelClass}>
          Your idea
        </label>
        <textarea
          id="booking-message"
          name="message"
          placeholder="Tell Susmita about your idea..."
          rows={5}
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button type="submit" className={`${buttonClasses({ size: 'lg' })} w-full`}>
        Send Request
        <ButtonArrow />
      </button>

      <p className="font-sans text-[0.8125rem] text-muted">
        Prefer email? Write to{' '}
        <a
          href={`mailto:${BOOKING_EMAIL}`}
          className="text-ink underline decoration-warm-grey underline-offset-4 transition-colors hover:decoration-ink"
        >
          {BOOKING_EMAIL}
        </a>
        .
      </p>

      {/* Worth stating plainly: this form posts nowhere. Submitting composes a
          message in the visitor's own mail app, so no third party ever sees it. */}
      <p className="font-sans text-[0.8125rem] leading-relaxed text-muted">
        Your details are never sent to a server — pressing send opens this request in your own email
        app, addressed to the studio. STB Studio uses them only to reply about your tattoo.
      </p>
    </form>
  )
}
