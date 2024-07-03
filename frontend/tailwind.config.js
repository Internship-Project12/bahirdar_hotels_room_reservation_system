/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 8 column grid
        8: "repeat(2, minmax(10%, 1fr)) 20% 8% 8% 8% 20% 10% ",
        2: "minmax(max-content, 1fr) 149px",
        7: "repeat(7,minmax(10%, 1fr))",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      fontWeight: {
        thin: "100",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
    },
  },
  plugins: [],
};
