/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-bg": "url('/src/assets/img/flight-attendant.jpeg')",
      },
      fontFamily: {
        ysabeau: ["Ysabeau", "sans-serif"],
      },
      colors: {
        "orange-custom": "#e26b1c",
        "darker-orange": "#71360E",
        "very-dark-orange": "#391B07",
      },
    },
  },

  plugins: [],
}
