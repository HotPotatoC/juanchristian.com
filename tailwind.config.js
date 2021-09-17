module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
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
  variants: {
    extend: {
      transform: ["group-hover"],
      translate: ["group-hover"],
    },
  },
  plugins: [],
};
