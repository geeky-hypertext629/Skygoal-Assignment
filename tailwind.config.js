/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-background": "#fff",
        "black-fonts-headings": "#2d2e2e",
        black: "#262626",
        black1: "#000",
        whitesmoke: {
          "100": "#f3f3f3",
          "200": "#f2f2f2",
          "300": "#ebebeb",
        },
        "muted-color": "#78858f",
        gray: {
          "100": "#7d7d7d",
          "200": "#282828",
          "300": "#272829",
          "400": "#1f2027",
        },
        coral: "#f27a44",
        indianred: "#be554b",
        lightgreen: "#87cc81",
        dimgray: "#505c59",
        khaki: "#f8e27e",
        cornsilk: "rgba(248, 241, 211, 0.25)",
      },
      spacing: {},
      fontFamily: {
        "text-b": "Inter",
        "headline-extra-bold-h4": "Roboto",
        inherit: "inherit",
        poppins: "Poppins",
      },
      borderRadius: {
        "8xs-7": "4.7px",
        "xs-7": "11.7px",
        "11xl": "30px",
        xl: "20px",
        "31xl": "50px",
        "2xl": "21px",
      },
    },
    fontSize: {
      base: "16px",
      "21xl": "40px",
      sm: "14px",
      "smi-8": "12.8px",
      "11xl": "30px",
      xl: "20px",
      "13xl": "32px",
      "9xl": "28px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
