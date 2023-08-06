module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['GeneralSans-Regular', 'sans-serif'],
      medium: ['GeneralSans-Medium', 'sans-serif'],
      display: ['GeneralSans-Semibold', 'sans-serif'],
      black: ['GeneralSans-Black', 'sans-serif'],
      nikea: ['NIKEA', 'GeneralSans-Semibold', 'sans-serif'],
      serif: ['soria-font', 'serif'],
    },
    extend: {
      colors: {
        primary: '#0043FF',
        white: '#F8E9E2',
        black: '#151519',
      },
    },
  },
  plugins: [],
}
