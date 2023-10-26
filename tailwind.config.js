/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      bg: "#e8e8ea",
      "bg-dark": "#090949",

      primary: "#041c65",
      "primary-dark": "#049604",

      secondary: "#0449e0",
      "secondary-dark": "#04ff04",
    },
    fontSize: {
      m: ["16px", "24px"],
      l: ["23px", "32px"],
    },
    fontFamily: {
      main: ["Consolas"],
    },
  },
  plugins: [],
};
