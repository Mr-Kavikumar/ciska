/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'Poster':"url('/src/assets/Poster.png')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

