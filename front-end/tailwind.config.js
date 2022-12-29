module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cf-green': '#00AD8C',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
