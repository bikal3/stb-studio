import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import BookingForm from '@/components/book/BookingForm'

jest.mock('@/lib/links', () => ({
  whatsappUrl: () => 'https://wa.me/test',
}))

describe('BookingForm', () => {
  beforeEach(() => {
    global.fetch = jest.fn()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

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

  it('renders WhatsApp fallback link', () => {
    render(<BookingForm />)
    expect(screen.getByRole('link', { name: /whatsapp/i })).toHaveAttribute('href', 'https://wa.me/test')
  })

  it('shows success message after successful submission', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({ ok: true })
    render(<BookingForm />)
    fireEvent.submit(screen.getByRole('form', { name: /booking form/i }))
    await waitFor(() => {
      expect(screen.getByText(/thank you/i)).toBeInTheDocument()
    })
    expect(screen.queryByPlaceholderText('Your name')).not.toBeInTheDocument()
  })

  it('shows error message after failed submission', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({ ok: false })
    render(<BookingForm />)
    fireEvent.submit(screen.getByRole('form', { name: /booking form/i }))
    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
    })
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument()
  })

  it('shows error message when fetch throws', async () => {
    ;(global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'))
    render(<BookingForm />)
    fireEvent.submit(screen.getByRole('form', { name: /booking form/i }))
    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
    })
  })
})
