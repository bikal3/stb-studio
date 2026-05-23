import { whatsappUrl, instagramUrl, bookingMailtoUrl, BOOKING_EMAIL } from '@/lib/links'

describe('whatsappUrl', () => {
  const originalEnv = process.env

  beforeEach(() => {
    process.env = { ...originalEnv }
  })

  afterEach(() => {
    process.env = originalEnv
  })

  it('returns a wa.me URL with the configured number', () => {
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = '9779841234567'
    expect(whatsappUrl()).toBe('https://wa.me/9779841234567')
  })

  it('includes an encoded pre-filled message when provided', () => {
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = '9779841234567'
    const url = whatsappUrl('Book a consult')
    expect(url).toContain('text=Book%20a%20consult')
  })
})

describe('instagramUrl', () => {
  it('returns the configured Instagram URL', () => {
    process.env.NEXT_PUBLIC_INSTAGRAM_URL = 'https://www.instagram.com/stbstudio'
    expect(instagramUrl()).toBe('https://www.instagram.com/stbstudio')
  })
})

describe('bookingMailtoUrl', () => {
  it('returns a mailto URL addressed to the booking email', () => {
    const url = bookingMailtoUrl('Alex', 'alex@example.com', 'Fineline', 'inner wrist', 'Monday, Friday', 'Just a small flower')
    expect(url).toMatch(new RegExp(`^mailto:${BOOKING_EMAIL}`))
  })

  it('includes an encoded subject with the client name', () => {
    const url = bookingMailtoUrl('Alex', 'alex@example.com', 'Fineline', 'inner wrist', 'Saturday', '')
    expect(url).toContain('subject=')
    expect(url).toContain('Alex')
  })

  it('includes all form fields including preferred days in the encoded body', () => {
    const url = bookingMailtoUrl('Alex', 'alex@example.com', 'Fineline', 'inner wrist', 'Monday, Friday', 'Small lotus')
    const body = decodeURIComponent(url.split('body=')[1])
    expect(body).toContain('Name: Alex')
    expect(body).toContain('Email: alex@example.com')
    expect(body).toContain('Style: Fineline')
    expect(body).toContain('Placement: inner wrist')
    expect(body).toContain('Preferred days: Monday, Friday')
    expect(body).toContain('Small lotus')
  })
})
