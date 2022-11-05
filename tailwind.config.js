/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },

    extend: {
      colors: {
        darkBg: "#162744",
        Bg: "#F7F7FB",
        primary: "#162744",
        darkPrimary: "#8ABFFF",
        secondary: "#4585C5",
        darkSecondary: "#5DA6DB",
        miniText: "#ACB1BC",
        darkMiniText: "#F7F7FB",
        cardColor: "#EBEEF5",
        darkCardColor: "#435882",
        cardDark: "#E9ECED",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    plugins: [],
  },
};
