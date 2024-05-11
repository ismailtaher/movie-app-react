/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        "open-menu": {
          "0%": { transfrom: "scaleX(0)" },
          "100%": { transfrom: "scaleX(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 1s ease-in-out forwards",
      },
    },
    fontFamily: {
      display: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
