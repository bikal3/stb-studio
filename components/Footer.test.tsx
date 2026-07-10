import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

jest.mock('@/lib/links', () => ({
  whatsappUrl: () => 'https://wa.me/9779841234567',
  instagramUrl: () => 'https://www.instagram.com/stbstudio',
  facebookUrl: () => 'https://www.facebook.com/stbstudio',
  tiktokUrl: () => 'https://www.tiktok.com/@stbstudio',
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
