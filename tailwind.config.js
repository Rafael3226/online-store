const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#6b7280',
      primary: colors.blue,
      secondary: colors.yellow,
      neutral: colors.gray,
      danger: colors.red,
    },
    extend: {},
  },
  plugins: [],
}
