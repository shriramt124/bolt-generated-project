/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'glass-bg': 'rgba(255, 255, 255, 0.1)',
        'glass-border': 'rgba(255, 255, 255, 0.2)',
        'primary-purple': '#8a2be2',
      },
      backdropFilter: {
        'blur': 'blur(10px)',
      },
    },
  },
  plugins: [],
}
