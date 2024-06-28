/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 8 column grid
        10: "repeat(3, minmax(10%, 1fr)) 10% 10% 10% 20% 10% ",
      },
    },
    lato: ["Lato", "sans-serif"],
  },
  plugins: [],
};
