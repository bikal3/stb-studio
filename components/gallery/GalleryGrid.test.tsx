import { render, screen, fireEvent } from '@testing-library/react'
import GalleryGrid from '@/components/gallery/GalleryGrid'

const images = [
  { src: '/images/tatto-1.png', alt: 'Tattoo 1' },
  { src: '/images/tatto-2.png', alt: 'Tattoo 2' },
]

describe('GalleryGrid', () => {
  it('renders a button for each image', () => {
    render(<GalleryGrid images={images} />)
    expect(screen.getAllByRole('button', { name: /view/i })).toHaveLength(2)
  })

  it('lightbox is not shown initially', () => {
    render(<GalleryGrid images={images} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('opens lightbox when an image is clicked', () => {
    render(<GalleryGrid images={images} />)
    fireEvent.click(screen.getByLabelText('View Tattoo 1'))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('closes lightbox when close is triggered', () => {
    render(<GalleryGrid images={images} />)
    fireEvent.click(screen.getByLabelText('View Tattoo 1'))
    fireEvent.click(screen.getByLabelText('Close'))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('opens lightbox showing the clicked image', () => {
    render(<GalleryGrid images={images} />)
    fireEvent.click(screen.getByLabelText('View Tattoo 2'))
    expect(screen.getByAltText('Tattoo 2')).toBeInTheDocument()
  })
})
