module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ee2b4b",
        primary_hover: "#d61f3d",
        background_light: "#f8f6f6",
        background_dark: "#221013",
        surface_light: "#ffffff",
        surface_dark: "#2f1b1e",
        border_light: "#e5e5e5",
        border_dark: "#543b3f",
        text_muted: "#b99da1",
      },
    },
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
};
