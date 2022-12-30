module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cf-green': '#00AD8C',
        'cf-dark-blue': '#021B51',
        'cf-dark-grey': '#727D94;',
        'cf-mid-grey': '#A1A8B8',
        'cf-dark2-grey': '#4D5566',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
