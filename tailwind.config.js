/** @type {import('tailwindcss').Config} */
const colors = require("./src/utils/colors")
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors,
    extend: {},
  },
  plugins: [],
}

