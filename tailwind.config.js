const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./_site/**/*.njk",
    "./_site/**/*.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      sky: colors.sky,
      red: colors.red,
      indigo: colors.indigo,
      amber: colors.amber,
    }
  },
  plugins: [],
}
