module.exports = {
  purge: [
    './_site/**/*.njk',
    './_site/**/*.html',
  ],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
