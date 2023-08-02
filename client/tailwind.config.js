/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '1300px',
        'sm': '400px',
        'md': '900px',
        'xs': '200px'
      },
      gradientColorStops: {
        'violet': '#7F00FF',
        'pink': '#FF007F',
      },
      spacing: {
        '50': '5rem',
      },
    },
  },
  plugins: [],
}

