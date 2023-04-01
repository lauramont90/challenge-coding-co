const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: "#E9E6E1",
        orange: "#e6511b",
        greyBox: "#272727",
        greyFooter: "#383838",
        greyLetters: "#707070",
        pinkNav: "#ff1f57",
        yellowLetters: "#e1df3c",
      },
    },
    fontFamily: { 
      workSans: ['Work Sans', ...defaultTheme.fontFamily.sans],

    },
    borderWidth: {
      '7': '7px',
    },
    screens: {
      'mobile': '640px',
      'lg': '1440px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
