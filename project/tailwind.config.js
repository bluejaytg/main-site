/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1B263B',
        accent: '#3AAFB9',
        secondary: '#F4F4F9',
        highlight: '#FF007F',
        neutral: '#707070',
      },
    },
  },
  plugins: [],
};