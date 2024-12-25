/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a73e8",
        secondary: "#202124",
        accent: "#34a853",
      },
    },
  },
  plugins: [],
};
