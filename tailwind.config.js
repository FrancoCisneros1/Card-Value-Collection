/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#33bf86',
          dark: '#0f7a52',
          soft: '#e6f8f0',
        },
        ink: {
          DEFAULT: '#111111',
          muted: '#6b6b6b',
        },
        line: '#e5e5e5',
        surface: '#f1f1f1',
        positive: '#33bf86',
        negative: '#e5484d',
        grade: {
          psa: '#9b3fc7',
          bgs: '#3b82d6',
        },
      },
      fontFamily: {
        sans: ['Catamaran', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
