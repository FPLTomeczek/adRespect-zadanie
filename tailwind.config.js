/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "chevron-down": "url('/src/assets/images/navbar/chevron-down.svg')",
      },
      colors: {
        "primary-color": "#DCC1AB",
        "secondary-color": "#1B5B31",
        "grey-color": "#F5F0EC",
      },
    },
  },
  plugins: [],
};