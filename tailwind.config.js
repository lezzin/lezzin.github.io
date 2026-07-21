/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Architects Daughter"', 'cursive'],
        handwritten: ['"Gloria Hallelujah"', 'cursive'],
      },
      borderRadius: {
        rough: '255px 15px 225px 15px/15px 225px 15px 255px',
        'rough-circle': '61% 39% 57% 43% / 42% 58% 38% 62%',
        'rough-pill': '999px 860px 999px 900px / 780px 999px 850px 999px',
      },
    },
  },
  plugins: [],
}
