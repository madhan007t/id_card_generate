/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00C3CC",
        secondary: "#6A2EF2",
      },
    },
  },
  plugins: [],
};
