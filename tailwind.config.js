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
        "black-color": "#111111",
        "end-gradient": "rgba(214, 183, 158, 0.00) 100%",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
