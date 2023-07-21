module.exports = {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      colors: {
        smoke: '#EEF0F2',
        raisin: '#23232A',
        princeton: '#FF9400',
      },
      fontFamily: {
        'satoshi-regular': ['satoshi-regular'],
        'satoshi-bold': ['satoshi-bold'],
        'satoshi-light': ['satoshi-light'],
        'satoshi-italic': ['satoshi-italic'],
      }
    },
  },
  plugins: [],
}
