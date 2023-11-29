/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage : {
        'appImg' : "url('/img/1.jpeg')"
      }
    },
  },
  plugins: [],
}

