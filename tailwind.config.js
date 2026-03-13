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
        'rough-1': '255px 15px 225px 15px/15px 225px 15px 255px',
        'rough-2': '15px 225px 15px 255px/255px 15px 225px 15px',
      },
    },
  },
  plugins: [],
}
