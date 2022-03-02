const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.yellow,
      blue: colors.blue,
      green: colors.green,
      orange: colors.orange,
      purple: colors.purple,
      C1: {
        default: "black",
        B: "#575757",
        C: "#A9A9A9",
        D: "#D1D1D1",
        E: "#EBEBEB",
        F: "#F5F5F5",
        G: "#E5E5E5",
      },
      C2: {
        default: "#6A983C",
        B: "#46760A",
        C: "#92C064",
        D: "#C8DEB3",
        E: "#F4F8EC",
      },
      C3: {
        default: "#D0A866",
        B: "#B28A48",
        C: "#ECD2A6",
        D: "#FAEDD8",
      },
      C4: {
        default: "#E5704B",
        B: "#C7522D",
        C: "#EB8D70",
        D: "#F7C6B7",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
