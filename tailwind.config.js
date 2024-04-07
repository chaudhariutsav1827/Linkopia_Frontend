/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    colors: {
      blue: {
        100: "#A5C6FB",
        300: "#87B3FA",
        500: "#69A0F9",
        700: "#4B8DF7",
        900: "#2E7CF6",
        1000: "#06398C",
      },
      gray: {
        100: "#E6E7EC",
        300: "#DADBE2",
        500: "#CECFD9",
        700: "#BBBDCB",
        900: "#A8AABC",
      },
      black: {
        100: "#A4A4A4",
        300: "#808080",
        500: "#6D6D6D",
        700: "#5B5B5B",
        900: "#242424",
      },
    },
    extend: {},
  },
  plugins: [],
};
