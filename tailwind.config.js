module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./dataviz/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./progressbar/**/*.{js,ts,jsx,tsx}",
    "./utils/style.js"
  ],
  theme: {
    extend: {
      colors: {
        'ec-yellow': {
          DEFAULT: '#FFE987',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFF8D9',
          '400': '#FFF0B0',
          '500': '#FFE987',
          '600': '#FFDF4F',
          '700': '#FFD417',
          '800': '#DEB500',
          '900': '#A68700'
        },
        'ec-grayred': {
          DEFAULT: '#26161E',
          '50': '#9A597A',
          '100': '#8D5270',
          '200': '#74435B',
          '300': '#5A3447',
          '400': '#402532',
          '500': '#26161E',
          '600': '#020102',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        },
      },
      fontFamily: {
        lato: ['Lato', 'serif'],
        righteous: ['Righteous', 'sans-serif']
      },
    }
  },
  plugins: [require("daisyui")]
}
