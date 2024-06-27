/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fontColor: "#ccd6f6", // Corrected to "colors" instead of "fontColor"
        navBg: "#060e1a"
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'], // Corrected typo in font name "INter" to "Inter"
        'logoFont': ['NTR'],
      },
      backgroundColor: {
        'bgColor': '#0a192f',
      },
      screens: {
      'tablet': '640px',

      'laptop': '1024px',

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    },
  },
  plugins: [],
};
