/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        Kumbh: ["Kumbh Sans"],
      },
      colors: {
        "dark-cyan": "hsl(185, 75%, 39%)",
        "dark-blue": "hsl(229, 23%, 23%)",
        "gray-blue": "hsl(227, 10%, 46%)",
        "dark-gray": "hsl(0, 0%, 59%)",
      },
    },
  },
  plugins: [],
};
