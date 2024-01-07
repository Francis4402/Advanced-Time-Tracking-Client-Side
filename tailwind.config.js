/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "'Poppins', 'sans-serif'",
        Caveat: "'Caveat', 'sans-serif'",
      },
    },
  },
  plugins: [require("daisyui")],
}

