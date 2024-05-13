/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "baby-powder": "#FFFFFA",
        "caribbean-current": "#0D5C63",
        Verdisgris: "#44A1A0",
        "tiffany-blue": "#78CDD7",
        Teal: "#247B7B",
      },
      keyframes: {
        "open-menu": {
          "0%": { transfrom: "scaleX(0)" },
          "100%": { transfrom: "scaleX(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.2s ease-in-out forwards",
      },
    },
    fontFamily: {
      display: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
