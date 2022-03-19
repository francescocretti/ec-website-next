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
      fontFamily: {
        lato: ['Lato', 'serif'],
        righteous: ['Righteous', 'sans-serif']
      },
    }
  },
  plugins: [require("daisyui")]
}
