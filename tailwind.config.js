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
      widest: '.3em'
    },
    extend: {
      spacing: {
        '128': '32rem'
      }
    },
  },
  plugins: [],
}

