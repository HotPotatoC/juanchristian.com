module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Satoshi-Regular", "sans-serif"],
      medium: ["Satoshi-Medium", "sans-serif"],
      display: ["Satoshi-Bold", "sans-serif"],
      black: ["Satoshi-Black", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#814DF1",
        white: "#eee",
        black: "#1b1b1b",
      },
    },
  },
  plugins: [],
};
