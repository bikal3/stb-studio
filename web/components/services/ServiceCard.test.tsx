import { render, screen } from '@testing-library/react'
import ServiceCard from '@/components/services/ServiceCard'
import type { ServiceItem } from '@/lib/content'

const withDuration: ServiceItem = {
  name: 'Micro Session',
  description: 'Minimal symbols · fine line · small placements',
  duration: '30–60 min',
  price: 'Rs 3,000 – 6,000',
}

const withoutDuration: ServiceItem = {
  name: 'Design Consultation',
  description: 'Personal concept creation.',
  duration: null,
  price: 'Rs 2,000 – 5,000',
}

describe('ServiceCard', () => {
  it('renders service name', () => {
    render(<ServiceCard service={withDuration} />)
    expect(screen.getByText('Micro Session')).toBeInTheDocument()
  })

  it('renders price', () => {
    render(<ServiceCard service={withDuration} />)
    expect(screen.getByText(/Rs 3,000/)).toBeInTheDocument()
  })

  it('renders duration when present', () => {
    render(<ServiceCard service={withDuration} />)
    expect(screen.getByText(/30–60 min/)).toBeInTheDocument()
  })

  it('renders without crashing when duration is null', () => {
    render(<ServiceCard service={withoutDuration} />)
    expect(screen.getByText('Design Consultation')).toBeInTheDocument()
    expect(screen.getByText(/Rs 2,000/)).toBeInTheDocument()
  })
})
