/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "d3prop-gradient":
          "linear-gradient(to right, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(1,131,157,1) 100%);",
        "d3prop-gradient-alt":
          "linear-gradient(to left, rgba(2,0,36,1) 20%, rgba(9,9,121,1) 80%, rgba(1,131,157,1) 100%);",
      },
      colors: {
        "d3prop-theme-color": "rgba(9,9,121,1)",
        "d3prop-light-black": "#222222",
        "d3prop-light-gray": "#717171",
      },
      gridTemplateRows: {
        "new-listing": "10vh 80vh 10vh",
      },
    },
  },
  plugins: [],
};
