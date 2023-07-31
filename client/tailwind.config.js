/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '1100px',
        'sm': '640px',
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

