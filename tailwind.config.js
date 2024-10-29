/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns:{
        'responsive': 'repeat(auto-fill, minmax(300px, 1fr))'
      },
      colors: {
        primaryColor: "#0f5a02",
        secondaryColor: "#f8faf7",
        darkblue: "#060b37",
        lightblue: "#004aaf",
        darkgreen: '#064200',
        lightgreen: '#00bf6f',
        lightorange: '#f9ab00',
      },
      textColor: {
        primary: "#25324b",
      },
      fontSize: {
        little: "12px",
      },
    },
  },
  plugins: [],
};
