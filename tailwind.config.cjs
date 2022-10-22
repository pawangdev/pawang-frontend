/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Open Sans', 'system-ui', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'muted': '#6c757d',
      },
    },
  },
  plugins: [],
}
