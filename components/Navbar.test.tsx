import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'

jest.mock('@/lib/links', () => ({
  whatsappUrl: () => 'https://wa.me/9779841234567',
}))

describe('Navbar', () => {
  it('renders the studio name', () => {
    render(<Navbar />)
    expect(screen.getByText('STB STUDIO')).toBeInTheDocument()
  })

  it('renders Gallery, About, and Services nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /gallery/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument()
  })

  it('Book button links to WhatsApp', () => {
    render(<Navbar />)
    const bookLink = screen.getByRole('link', { name: /book/i })
    expect(bookLink).toHaveAttribute('href', 'https://wa.me/9779841234567')
  })
})
