import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '@/components/Navbar'

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

  it('Book button links to /book', () => {
    render(<Navbar />)
    const bookLink = screen.getByRole('link', { name: /^book$/i })
    expect(bookLink).toHaveAttribute('href', '/book')
  })

  it('opens the full-screen menu overlay when the menu button is clicked', () => {
    render(<Navbar />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('dialog', { name: /menu/i })).toBeInTheDocument()
  })

  it('closes the menu when a navigation link is clicked', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }))
    // The overlay adds a second "Gallery" link; clicking it should close the menu.
    const galleryLinks = screen.getAllByRole('link', { name: /gallery/i })
    fireEvent.click(galleryLinks[galleryLinks.length - 1])
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the menu on Escape', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }))
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
