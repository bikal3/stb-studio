import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'STB Studio — Private Art & Tattoo, Kathmandu',
  description:
    'A private sanctuary for art and self-expression. Custom tattoos, collectible art objects, and design experiences by Susmita Tamang Bomjan in Kathmandu, Nepal.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-warm-white text-ink font-sans">
        {children}
      </body>
    </html>
  )
}
