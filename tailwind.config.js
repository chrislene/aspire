/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      lg: { max: "1280px" },
      md: { max: "1180px" },
      sm: { max: "768px" },
      xs: { max: "350px" },
    },
    extend: {
      fontFamily: {
        primary: `'Open Sans', sans-serif`,
      },
      colors: {
        primary: {
          DEFAULT: "#0C365A",
          100: "#325BAF",
        },
        secondary: {
          DEFAULT: "#01d167",
        },
      },
      textColor: {
        default: "#222222",
      },
      borderColor: {
        default: "#FCFCFC",
      },
    },
  },
  plugins: [],
};
