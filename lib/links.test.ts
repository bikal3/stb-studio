import { whatsappUrl, bookingMailtoUrl, BOOKING_EMAIL } from '@/lib/links'

describe('whatsappUrl', () => {
  it('returns a wa.me URL built from the studio phone number', () => {
    expect(whatsappUrl()).toBe('https://wa.me/9779762111193')
  })

  it('includes an encoded pre-filled message when provided', () => {
    expect(whatsappUrl('Book a consult')).toContain('text=Book%20a%20consult')
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
