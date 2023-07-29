/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "medium-purple": "#7c5dfa",
        "light-purple": "#9277ff",
        "midnight-blue": "#1e2139",
        "dark-blue": "#252945",
        "light-blue": "#dfe3fa",
        "blue-gray": "#888eb0",
        "cerulean-blue": "#7e88c3",
        "darkest-blue": "#0c0e16",
        "coral-red": "#ec5757",
        "light-red": "#9277ff",
        "ghost-white": "#f8f8fb",
        "navy-blue": "#141625",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
