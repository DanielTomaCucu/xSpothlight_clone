/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  important: true,
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
        yellow_hover: "#fcd64e",
        dark2: "#161616",
        body: "#010101",
        text_silver: "#8e9396",
        secondary: "#212121",
        secondary_hover: "#2c2c2c",
        yellow_op: "#f9ca1c33",
        dark_wallet: "#0b0b0b",
        footer_free: "#00c8b0",
        footer_free_bg: "rgb(0,200,176,.1)",
      },
      width: {
        "fit-content": "fit-content",
      },
      inset: {
        "-4vh": "-4vh",
        "25rem": "25rem",
      },
      borderWidth: {
        1: "1px",
      },
      borderRadius: {
        '4xl':'35%'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          scrollbarWidth: "none",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
