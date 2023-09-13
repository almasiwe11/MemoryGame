/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FDA214",
        gray: "#BCCED9",
        "gray-middle": "#304859",
        "gray-dark": "#152938",
        whitish: "#F2F2F2",
        "li-text": "#7191A5",
        "gray-blue": "#6395B8",
        "white-2": "#FCFCFC",
        li: "#DFE7EC",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
  },
  plugins: [],
}
