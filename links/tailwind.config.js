/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      green: "#34462D",
    },
    extend: {
      fontFamily: {
        custom: ["Lobster", "sans-serif"],
      },
    },
  },
  plugins: [],
};
