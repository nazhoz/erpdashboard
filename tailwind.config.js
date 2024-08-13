/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'formbordercolor':'#E2E2E2',
        'formbackgroundcolor':"#FFFFFF",
        'inputbordercolor':'#3849E6',
        'inputs':'#dddddd',
        'links':'#3849E6',
        'buttonhover':'#3849E6',
        'deletecolor':'#e94033',
        'blackborder':'#000'
      }
    },
  },
  plugins: [],
}

