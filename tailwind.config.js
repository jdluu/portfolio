/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans':[],
        'serif':[],
        'mono':[],
        'display':[],
        'body':[],
      }
    },
  },
  plugins: [],
}