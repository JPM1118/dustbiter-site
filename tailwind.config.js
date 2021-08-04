const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
      },
      colors: {
        orange: colors.orange,
      },
      fontFamily: {
        russo: ['"Russo One"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
