/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      fontSize: {
        title: "14rem",
      },
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        alata: ["Alata", "sans-serif"],
        Bebas: ["Bebas Neue", "sans-serif"],
        SourceSans: ["Source Sans Pro", "sans-serif"],
      },
      colors: {
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
        primaryYellow: "#FEDB39",
        grayText: "#C2C2C2",
        background: "#242424",
      },
      letterSpacing: {
        widest: ".3em",
      },
    },
  },
  plugins: [],
};
