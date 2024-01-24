/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        md: '768px',
        lg: '1024px',
        xl: '1024px',
        '2xl': '1024px',
      }
    }, letterSpacing: {
      wider: '.1em',
      widest: '.3em'
    },
    extend: {
      spacing: {
        '0.1': '0.01rem',
        '128': '32rem'
      }
    },
  },
  plugins: [],
}

