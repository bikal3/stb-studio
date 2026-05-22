import { render } from '@testing-library/react'
import PlaceholderImage from '@/components/PlaceholderImage'

describe('PlaceholderImage', () => {
  it('is aria-hidden', () => {
    const { container } = render(<PlaceholderImage />)
    expect(container.firstChild).toHaveAttribute('aria-hidden', 'true')
  })

  it('applies custom className', () => {
    const { container } = render(<PlaceholderImage className="aspect-square" />)
    expect(container.firstChild).toHaveClass('aspect-square')
  })
})
