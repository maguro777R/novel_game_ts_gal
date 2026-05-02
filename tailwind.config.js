/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Zen Maru Gothic', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        handwriting: ['Klee One', 'serif'],
        script: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
};
