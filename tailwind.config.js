const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },

      fontFamily: {
        sans: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
        bahij: ["Bahij TheSansArabic", "sans-serif"],
      },

      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#1E1E1E",
        // gray: {},
        red: {
          DEFAULT: "#ED2027",
        },
      },

      transitionTimingFunction: {
        "menu-link": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },

  plugins: [
    // require('@tailwindcss/forms'),
    require("preline/plugin"),
    require("tailwindcss-3d"),
  ],
};
