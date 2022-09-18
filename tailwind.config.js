const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Overpass, sans-serif"],
      },
      colors: {
        blue: {
          800: "hsl(213, 19%, 18%)",
          900: "hsl(216, 12%, 8%)",
        },
        orange: {
          800: "hsl(25, 97%, 53%)",
        },
        gray: {
          100: "hsl(0, 0%, 100%)",
          300: "hsl(217, 12%, 63%)",
          400: "hsl(216, 12%, 54%)",
        },
      },
    },
    screens: {
      sm: { max: "380px" },
      xl: { max: "1440px" },
    },
  },
  plugins: [],
};
