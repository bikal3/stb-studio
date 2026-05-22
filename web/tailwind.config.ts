import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'warm-white': '#faf7f4',
        'cream': '#f5f0eb',
        'cream-dark': '#f0ebe4',
        'warm-grey': '#e8e0d8',
        'accent': '#c4a882',
        'ink': '#1a1a1a',
        'ink-light': '#2a2a2a',
        'muted': '#888888',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
