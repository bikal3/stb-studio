'use client'

import { useState } from 'react'
import { whatsappUrl } from '@/lib/links'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function BookingForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? '',
        {
          method: 'POST',
          body: new FormData(e.currentTarget),
          headers: { Accept: 'application/json' },
        }
      )
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <p className="font-serif italic text-xl text-ink mb-2">Thank you.</p>
        <p className="text-sm font-sans text-muted">Susmita will be in touch within 24–48 hours.</p>
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
        disabled={status === 'sending'}
        className="bg-ink text-warm-white text-[10px] tracking-[2px] uppercase font-sans px-4 py-3 hover:bg-ink-light transition-colors disabled:opacity-50"
      >
        {status === 'sending' ? 'Sending...' : 'Send Request'}
      </button>
      {status === 'error' && (
        <p className="text-sm font-sans text-red-600">
          Something went wrong. Please try again or{' '}
          <a
            href={whatsappUrl("I'd like to book a tattoo consult at STB Studio")}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            message on WhatsApp
          </a>
          .
        </p>
      )}
      <p className="text-[11px] font-sans text-muted mt-2">
        Prefer to message directly?{' '}
        <a
          href={whatsappUrl("I'd like to book a tattoo consult at STB Studio")}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-ink transition-colors"
        >
          WhatsApp <span aria-hidden="true">→</span>
        </a>
      </p>
    </form>
  )
}
