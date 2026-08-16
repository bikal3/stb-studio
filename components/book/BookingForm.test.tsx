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

  it('renders a checkbox for each day of the week', () => {
    render(<BookingForm />)
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    for (const day of days) {
      expect(screen.getByRole('checkbox', { name: day })).toBeInTheDocument()
    }
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

  it('shows a validation error when no day is selected and form is submitted', () => {
    render(<BookingForm />)
    fireEvent.submit(screen.getByRole('form', { name: /booking form/i }))
    expect(screen.getByText(/select at least one preferred day/i)).toBeInTheDocument()
    expect(screen.queryByText(/one last step/i)).not.toBeInTheDocument()
  })

  it('hands off to the mail app after submit when a day is selected', () => {
    render(<BookingForm />)
    fireEvent.click(screen.getByRole('checkbox', { name: 'Friday' }))
    fireEvent.submit(screen.getByRole('form', { name: /booking form/i }))
    expect(screen.getByText(/one last step/i)).toBeInTheDocument()
  })

  it('does not claim the request was sent, since mailto can silently fail', () => {
    render(<BookingForm />)
    fireEvent.click(screen.getByRole('checkbox', { name: 'Friday' }))
    fireEvent.submit(screen.getByRole('form', { name: /booking form/i }))
    expect(screen.getByText(/not sent until you/i)).toBeInTheDocument()
    expect(screen.queryByText(/thank you/i)).not.toBeInTheDocument()
  })

  it('offers direct contact fallbacks after handoff', () => {
    render(<BookingForm />)
    fireEvent.click(screen.getByRole('checkbox', { name: 'Friday' }))
    fireEvent.submit(screen.getByRole('form', { name: /booking form/i }))
    expect(screen.getByRole('link', { name: /whatsapp/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: BOOKING_EMAIL })).toHaveAttribute(
      'href',
      `mailto:${BOOKING_EMAIL}`
    )
  })

  it('can return to the form after handoff', () => {
    render(<BookingForm />)
    fireEvent.click(screen.getByRole('checkbox', { name: 'Friday' }))
    fireEvent.submit(screen.getByRole('form', { name: /booking form/i }))
    fireEvent.click(screen.getByRole('button', { name: /back to the form/i }))
    expect(screen.getByRole('form', { name: /booking form/i })).toBeInTheDocument()
  })
})
