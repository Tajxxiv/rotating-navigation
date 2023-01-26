/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blackCoral: '#545863',
        electricBlue: '#00E8FC'
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif']
      },
    },
  },
  plugins: [],
}
