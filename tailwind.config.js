/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue'
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf8e9',
          100: '#fbecc0',
          200: '#f7db8a',
          300: '#f3c553',
          400: '#f0b22b',
          500: '#e8a311',
          600: '#c4850c',
          700: '#9c660d',
          800: '#7f5311',
          900: '#6c4513'
        },
        ink: {
          900: '#0a0a0a',
          800: '#121212',
          700: '#181818',
          600: '#222222'
        }
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
