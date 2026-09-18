import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

jest.mock('@/lib/links', () => ({
  BOOKING_EMAIL: 'stbstudio.np@gmail.com',
  whatsappUrl: () => 'https://wa.me/9779841234567',
  INSTAGRAM_URL: 'https://www.instagram.com/stbstudio',
  FACEBOOK_URL: 'https://www.facebook.com/stbstudio',
  TIKTOK_URL: 'https://www.tiktok.com/@stbstudio',
  MAP_URL: 'https://maps.app.goo.gl/t3GnFxZAFMDacN9g6',
}))

describe('Footer', () => {
  it('renders studio name', () => {
    render(<Footer />)
    expect(screen.getByText('STB Studio')).toBeInTheDocument()
  })

  it('renders location', () => {
    render(<Footer />)
    expect(screen.getByText('Kathmandu, Nepal')).toBeInTheDocument()
  })

  it('links the street address to Google Maps', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Dhara Galli, Kathmandu, Nepal' })
    expect(link).toHaveAttribute('href', 'https://maps.app.goo.gl/t3GnFxZAFMDacN9g6')
  })

  it('renders Instagram link with correct href', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /instagram/i })
    expect(link).toHaveAttribute('href', 'https://www.instagram.com/stbstudio')
  })

  it('renders WhatsApp link with correct href', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /whatsapp/i })
    expect(link).toHaveAttribute('href', 'https://wa.me/9779841234567')
  })
})
