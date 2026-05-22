import { render, screen } from '@testing-library/react'
import SectionLabel from '@/components/SectionLabel'

describe('SectionLabel', () => {
  it('renders the label text', () => {
    render(<SectionLabel>Portfolio</SectionLabel>)
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
  })
})
