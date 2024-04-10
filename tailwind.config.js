/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    screens: {
      'ms': '320px',
      'mm': '375px',
      'ml': '425px',
      'md': '768px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'ds': '1280px',
      'dl': '1440px',
    },
    colors: {
      'black':'#000000',
      'white':'#ffffff',
      'other':'#5200FF',
      'tech':'#0B8D00',
      'nontech':'#C17400'
    },
    fontFamily: {
      display: ['Inter', 'sans-serif'],},
  },
  plugins: ['prettier-plugin-tailwindcss'],
}

