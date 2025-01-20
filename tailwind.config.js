/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        php: '#8C9EFF', // Adding PHP color
      },
    },
  },
  plugins: [],
}

