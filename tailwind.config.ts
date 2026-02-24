import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '300px',
        smx: '375px',
        smxx: '430px',
      },
      colors: {
        background: 'var(--background)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      },
      animation: {
        'pulse-button': 'pulse-button 1.3s ease-in-out infinite',
        'card-flip': 'card-flip 0.4s ease-in-out forwards',
        'card-fade': 'card-fade 0.3s ease-in-out forwards',
        'loader-rotate': 'loader-rotate 2.5s linear infinite',
        'loader-pulse': 'loader-pulse 1.2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-button': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
          '100%': { transform: 'scale(1)' },
        },
        'loader-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'loader-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.75)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
