/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container-custom": {
          width: "100%",
          maxWidth: "1332",
          paddingLeft: "16px",
          paddingRight: "16px",
          margin: "0 auto",
        },
      });
    },
  ],
};
