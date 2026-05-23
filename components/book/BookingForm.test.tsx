import { render, screen, fireEvent } from '@testing-library/react'
import BookingForm from '@/components/book/BookingForm'
import { BOOKING_EMAIL } from '@/lib/links'

// Suppress jsdom "not implemented: navigation" noise from window.location.href assignment
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
})
afterAll(() => {
  jest.restoreAllMocks()
})

describe('BookingForm', () => {
  it('renders all form fields', () => {
    render(<BookingForm />)
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/placement/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/tell susmita/i)).toBeInTheDocument()
  })

  it('renders send request button', () => {
    render(<BookingForm />)
    expect(screen.getByRole('button', { name: /send request/i })).toBeInTheDocument()
  })

  it('renders direct email link', () => {
    render(<BookingForm />)
    const emailLink = screen.getByRole('link', { name: BOOKING_EMAIL })
    expect(emailLink).toHaveAttribute('href', `mailto:${BOOKING_EMAIL}`)
  })

  it('shows success message after submit', () => {
    render(<BookingForm />)
    fireEvent.submit(screen.getByRole('form', { name: /booking form/i }))
    expect(screen.getByText(/thank you/i)).toBeInTheDocument()
  })
})
