/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBg: "#0F172A",
        primary: "#1E3866",
        secondary: "#2F69FE",
        miniText: "#A3A6AC",
        cardColor: "#EEF2F3",
        cardDark: "#E9ECED",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    plugins: [],
  },
};
