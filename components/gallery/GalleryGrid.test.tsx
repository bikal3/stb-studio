import { render, screen, fireEvent, within } from '@testing-library/react'
import GalleryGrid from '@/components/gallery/GalleryGrid'

const images = [
  { src: '/images/fine-line/img1.jpg', alt: 'Tattoo 1', type: 'Fine Line' },
  { src: '/images/colour-tattoo/img2.jpg', alt: 'Tattoo 2', type: 'Colour Tattoo' },
  { src: '/images/old-school/img3.jpg', alt: 'Tattoo 3', type: 'Old School' },
]

describe('GalleryGrid', () => {
  it('renders a button for each image when All is active', () => {
    render(<GalleryGrid images={images} />)
    expect(screen.getAllByRole('button', { name: /view/i })).toHaveLength(3)
  })

  it('renders filter tabs for All and each type', () => {
    render(<GalleryGrid images={images} />)
    expect(screen.getByRole('button', { name: /^all$/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /fine line/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /colour tattoo/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /old school/i })).toBeInTheDocument()
  })

  it('filters images when a type tab is clicked', () => {
    render(<GalleryGrid images={images} />)
    fireEvent.click(screen.getByRole('button', { name: /fine line/i }))
    expect(screen.getAllByRole('button', { name: /view/i })).toHaveLength(1)
    expect(screen.getByLabelText('View Tattoo 1')).toBeInTheDocument()
  })

  it('shows all images when All tab is clicked after filtering', () => {
    render(<GalleryGrid images={images} />)
    fireEvent.click(screen.getByRole('button', { name: /fine line/i }))
    fireEvent.click(screen.getByRole('button', { name: /^all$/i }))
    expect(screen.getAllByRole('button', { name: /view/i })).toHaveLength(3)
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
    // The grid tile carries the same alt text, so scope to the viewer itself.
    const dialog = screen.getByRole('dialog')
    expect(within(dialog).getByAltText('Tattoo 2')).toBeInTheDocument()
  })

  it('gives every tile descriptive alt text so the work is indexable', () => {
    render(<GalleryGrid images={images} />)
    for (const image of images) {
      expect(screen.getByAltText(image.alt)).toBeInTheDocument()
    }
  })

  it('loads the first tiles eagerly so the LCP does not wait on lazy-loading', () => {
    const { container } = render(<GalleryGrid images={images} />)
    const tiles = container.querySelectorAll('img')
    expect(tiles[0]).toHaveAttribute('loading', 'eager')
  })
})
