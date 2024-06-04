/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#FF8C1A',
        'hover': '#FFAC59',
        'second': '#820AD1',
        'third': '#0000FF',
        'white': '#FFF',
        'alternative': '#EBDBC8',
      },
    },
  },
  plugins: [],
}
