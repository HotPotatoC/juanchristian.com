module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './shared/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['GeneralSans-Regular', 'sans-serif'],
      medium: ['GeneralSans-Medium', 'sans-serif'],
      display: ['GeneralSans-Semibold', 'sans-serif'],
      black: ['GeneralSans-Black', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#814DF1',
        white: '#e1e0d8',
        black: '#151519',
      },
    },
  },
  plugins: [],
}
