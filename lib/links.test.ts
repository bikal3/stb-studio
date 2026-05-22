import { whatsappUrl, instagramUrl } from '@/lib/links'

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
