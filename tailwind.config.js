module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
        },
        cupcake: {
          ...require("daisyui/src/theming/themes")["[data-theme=cupcake]"],
        },
      },
    ],
  },
}
