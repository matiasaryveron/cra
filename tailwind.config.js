/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"], 
  theme: {
    extend: {
      fontFamily: {
        molengo:["Molengo", 'sans-serif']
      },
      colors: {
        primary: "#E6B800",
        secundary: "#D49F00", 
        dark: "#111111",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
        },
      },
    },
  },
  plugins: [],
};
