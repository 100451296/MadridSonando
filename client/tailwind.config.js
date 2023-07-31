/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '1105px',
        'sm': '400px',
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

