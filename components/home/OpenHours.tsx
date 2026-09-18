'use client'

import { useSyncExternalStore } from 'react'
import Container from '@/components/ui/Container'
import SectionLabel from '@/components/SectionLabel'
import Reveal from '@/components/ui/Reveal'
import { buttonClasses, ButtonArrow } from '@/components/ui/Button'
import { openingHours, siteConfig } from '@/lib/content'
import { whatsappUrl, BOOKING_EMAIL, MAP_URL, MAP_EMBED_URL } from '@/lib/links'

const noopSubscribe = () => () => {}
/** Monday-first index of the current weekday. Null while server-rendering, so
 *  the static export and the first client render produce identical markup. */
const getTodayIndex = () => (new Date().getDay() + 6) % 7
const getServerTodayIndex = () => null

export default function OpenHours() {
  const todayIndex = useSyncExternalStore(noopSubscribe, getTodayIndex, getServerTodayIndex)

  return (
    <section className="surface-ink py-[clamp(4rem,8vw,6.5rem)]">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="flex flex-col justify-center">
            <SectionLabel tone="dark" rule>
              We are open
            </SectionLabel>
            <h2 className="mt-6 font-serif text-h1 font-light italic leading-[1.05] text-warm-white">
              7 days
              <span className="block">a week</span>
            </h2>
            <p className="mt-6 text-lead font-sans text-mist">
              Walk-ins welcome. For custom work, book a consult first so we can set aside the time
              your idea deserves.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl("I'd like to book a tattoo consult at STB Studio")}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses({ variant: 'solid-light' })}
              >
                Message on WhatsApp
                <ButtonArrow />
              </a>
              <a
                href={`mailto:${BOOKING_EMAIL}`}
                className={buttonClasses({ variant: 'outline-light' })}
              >
                Email the studio
              </a>
            </div>

            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 self-start text-eyebrow uppercase font-sans text-mist transition-colors duration-300 hover:text-warm-white"
            >
              {siteConfig.street}, {siteConfig.location} — Directions
            </a>
          </Reveal>

          <Reveal delay={120}>
            <dl className="border-t border-ink-soft">
              {openingHours.days.map((day, i) => {
                const isToday = todayIndex === i
                return (
                  <div
                    key={day}
                    className={`flex items-center justify-between gap-4 border-b border-ink-soft px-4 py-4 transition-colors ${
                      isToday ? 'bg-warm-white/5' : ''
                    }`}
                  >
                    <dt className="flex items-center gap-3 font-sans text-[0.9375rem]">
                      <span className={isToday ? 'text-warm-white' : 'text-mist'}>{day}</span>
                      {isToday && (
                        <span className="border border-accent/40 px-2 py-0.5 text-eyebrow uppercase text-accent">
                          Today
                        </span>
                      )}
                    </dt>
                    <dd
                      className={`font-sans text-[0.9375rem] tabular-nums ${
                        isToday ? 'text-warm-white' : 'text-mist'
                      }`}
                    >
                      {openingHours.opens} – {openingHours.closes}
                    </dd>
                  </div>
                )
              })}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-14">
          <iframe
            src={MAP_EMBED_URL}
            title={`${siteConfig.name} on Google Maps`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block aspect-[4/3] w-full border-0 sm:aspect-[21/9]"
          />
        </Reveal>
      </Container>
    </section>
  )
}
