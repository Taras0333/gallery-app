/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // Ensure Tailwind scans all files
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        sm: '14px',
        base: '15px',
        lg: '16px',
        xl: '18px',
      },
    },
  },
  plugins: [],
}
