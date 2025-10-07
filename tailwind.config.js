// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scan all your React files
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#f4e005",
        secondary: "#d42929",
        body: "#1c1c1c",
        light: "#cdcdcd",
      },
    },
  },
  plugins: [],
}
