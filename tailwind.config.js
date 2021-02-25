// const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  purge:  ['./src/**/*.svelte', './src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      backgroundColor: theme => ({
       ...theme('colors'),
       'primary': '#000',
      }),
      fontFamily: {
        sans: ['Inter', 'system-ui'],
      },
      // textColor: theme => ({
      //   // ...theme('colors'),
      //   'primary': '#74767d',
      // })
    },
  variants: {
    extend: {},
  },
  plugins: [],
}
