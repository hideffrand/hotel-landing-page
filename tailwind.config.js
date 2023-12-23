/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "super": '10rem'
      },
      fontFamily: {
        "dm": ["DM Serif Display", 'serif']
      }
    },
  },
  plugins: [],
}

