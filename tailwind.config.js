// const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  purge:  ['./src/**/*.svelte', './src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      backgroundColor: theme => ({
       ...theme('colors'),
       'primary': '#050505',
      }),
      fontFamily: {
        sans: ['Inter', 'system-ui'],
      },
    },
  variants: {
    extend: {},
  },
  plugins: [],
}
