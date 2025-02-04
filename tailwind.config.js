/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["Inter", "serif"],
        slackside: ["Slackside One", "cursive"],
      },
      colors: {
        white: {
          primary: "#FFFFFF",
        },
        green: {
          primary: "#2DD9AE",
          secondary: "#00b187",
        },
        gray: {
          primary: "#CBD5D3",
          secondary: "#3A4A5B",
          thirdly: "#B9C3C0",
        },
        dark: {
          primary: "#171E25",
        },
        black: {
          primary: "#171E25",
          secondary: "#222F3C",
          thirdly: "#2A3547",
        },
        purple: {
          primary: "#DF53FF",
        },
        orange: {
          primary: "#FFA953",
          secondary: "rgba(255, 169, 83, 0.46)",
        },
        sofia: {
          primary: "#777DFF",
        },
        fugo: {
          primary: "#7048E8",
        },
      },
      listStyleType: {
        dash: "'- '",
        plus: "'+  '",
      },
    },
  },
  plugins: [],
};
