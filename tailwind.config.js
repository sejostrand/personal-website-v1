const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#020202',
      purple: '#4C0821',
      darkOrange: '#E24D2B',
      orange: '#EC7C32',
      darkYellow: '#F2B026',
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: '#FC5162',
      yellow: colors.amber,
    },
    extend: {
      fontFamily: {
        block1: ['"BlocpartyRegular"'],
        block2: ['"BlocpartyOutlineRegular"'],
        gamer: ['"Gamer"'],
        content: ['"blzee"'],
        piantato: ['"piantato"'],
        sunset: ['"sunset"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
