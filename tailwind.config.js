/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ancizar: ['"Ancizar Serif"', "serif"],
        nunito: ['"Nunito"', "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
      },
    },
  },
  plugins: [],
};
