import { render, screen, fireEvent } from '@testing-library/react'
import Lightbox from '@/components/gallery/Lightbox'

const images = [
  { src: '/images/tatto-1.png', alt: 'Tattoo 1' },
  { src: '/images/tatto-2.png', alt: 'Tattoo 2' },
  { src: '/images/tatto-3.png', alt: 'Tattoo 3' },
]

describe('Lightbox', () => {
  it('renders the initial image', () => {
    render(<Lightbox images={images} initialIndex={0} onClose={() => {}} />)
    expect(screen.getByAltText('Tattoo 1')).toBeInTheDocument()
  })

  it('calls onClose when close button clicked', () => {
    const onClose = jest.fn()
    render(<Lightbox images={images} initialIndex={0} onClose={onClose} />)
    fireEvent.click(screen.getByLabelText('Close'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when backdrop clicked', () => {
    const onClose = jest.fn()
    render(<Lightbox images={images} initialIndex={0} onClose={onClose} />)
    fireEvent.click(screen.getByRole('dialog'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when Escape key pressed', () => {
    const onClose = jest.fn()
    render(<Lightbox images={images} initialIndex={0} onClose={onClose} />)
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('navigates to next image', () => {
    render(<Lightbox images={images} initialIndex={0} onClose={() => {}} />)
    fireEvent.click(screen.getByLabelText('Next image'))
    expect(screen.getByAltText('Tattoo 2')).toBeInTheDocument()
  })

  it('navigates to previous image', () => {
    render(<Lightbox images={images} initialIndex={1} onClose={() => {}} />)
    fireEvent.click(screen.getByLabelText('Previous image'))
    expect(screen.getByAltText('Tattoo 1')).toBeInTheDocument()
  })

  it('wraps to last image when navigating previous from first', () => {
    render(<Lightbox images={images} initialIndex={0} onClose={() => {}} />)
    fireEvent.click(screen.getByLabelText('Previous image'))
    expect(screen.getByAltText('Tattoo 3')).toBeInTheDocument()
  })

  it('wraps to first image when navigating next from last', () => {
    render(<Lightbox images={images} initialIndex={2} onClose={() => {}} />)
    fireEvent.click(screen.getByLabelText('Next image'))
    expect(screen.getByAltText('Tattoo 1')).toBeInTheDocument()
  })
})
