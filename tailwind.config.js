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
        white: {
          50: '#fcf7f4',
          100: '#f8e9e2',
          200: '#f5ded3',
          300: '#edc6b4',
          400: '#e1a488',
        },
        black: '#151519',
      },
    },
  },
  plugins: [],
}
