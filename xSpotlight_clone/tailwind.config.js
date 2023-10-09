/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        sm: "576px", // Small devices (landscape phones, 576px and up)
        md: "768px", // Medium devices (tablets, 768px and up)
        lg: "992px", // Large devices (desktops, 992px and up)
        xl: "1200px", // Extra large devices (large desktops, 1200px and up)
        "2xl": "1400px", // Extra extra large devices (larger desktops, 1400px and up)
      },
      padding: {
        30: "7.5rem", // for px-30
        50: "12.5rem", // for px-50
      },
      colors: {
        dark: "#161616",
        yellow: "#fbca1c",
        dark2: "#161616",
        body: "#010101",
        text_silver: "#8e9396",
        secondary: "#212121",
        secondary_hover: "#2c2c2c",
      },
      width: {
        "fit-content": "fit-content",
      },
      inset: {
        "-4vh": "-4vh",
      },
    },
  },
  plugins: [],
};
