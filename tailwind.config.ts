import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Noto Sans SC'", '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ["'Noto Serif SC'", 'Georgia', 'serif'],
      },
      colors: {
        bg: '#0a0f1a',
        card: '#111827',
        'card-hover': '#1a2332',
        border: '#1e2a3a',
        accent: '#4f9cf7',
        'accent-alt': '#f472b6',
        'accent-green': '#34d399',
        surface: '#0d1422',
      },
    },
  },
  plugins: [],
} satisfies Config
