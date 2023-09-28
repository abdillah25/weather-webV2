/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Kanit: ["Kanit", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
      },
      backgroundColor: { dark: "#333" },
    },
  },
  /*eslint-env node*/
  plugins: [require("daisyui")],
};
