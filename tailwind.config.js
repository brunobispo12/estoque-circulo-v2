module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      colors: {
        smoke: '#EEF0F2',
        raisin: '#23232A',
        princeton: '#FF9400',
        yinmn: '#1C5491',
      },
      fontFamily: {
        'satoshi-regular': ['satoshi-regular'],
        'satoshi-bold': ['satoshi-bold'],
        'satoshi-light': ['satoshi-light'],
        'satoshi-italic': ['satoshi-italic'],
      },
      backgroundImage: {
        'banner': "url('../../assets/images/CirculoBanner.jpg')"
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
}
