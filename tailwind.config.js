module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/works.ts',
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
        primary: {
          50: '#e8f7ff',
          100: '#d5efff',
          200: '#b3e0ff',
          300: '#85c8ff',
          400: '#56a2ff',
          500: '#2f7bff',
          600: '#0c4eff',
          700: '#0043ff',
          800: '#063dcd',
          900: '#103b9f',
          950: '#0a215c',
        },
        white: {
          50: '#fcf7f4',
          100: '#f8e9e2',
          200: '#f5ded3',
          300: '#edc6b4',
          400: '#e1a488',
        },
        black: '#151519',
        'white-pastel': '#F9F5F6',
        'pink-pastel': '#FFD6DF',
        'yellow-pastel': '#FCE6D9',
        'cyan-pastel': '#DDF8F9',
        'green-pastel': '#A9ECA2',
        'red-pastel': '#F9B4B4',
        'orange-pastel': '#FEBE8C',
      },
    },
  },
  plugins: [],
}
