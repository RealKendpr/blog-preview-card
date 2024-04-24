/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Figtree", "sans-serif"],
      },
      colors: {
        primary: "hsl(47, 88%, 63%)",
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 7%)",
        grey: "hsl(0, 0%, 50%)",
      },
      boxShadow: {
        solid: " 8px 8px 0px",
      },
    },
  },
  plugins: [],
};
