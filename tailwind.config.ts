import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "early-dawn": {
          "50": "#fff9e6",
          "100": "#fef1c7",
          "200": "#fde18a",
          "300": "#fccc4d",
          "400": "#fbb624",
          "500": "#f5950b",
          "600": "#d96f06",
          "700": "#b44c09",
          "800": "#923b0e",
          "900": "#78310f",
          "950": "#451703",
        },
      },
    },
  },
  plugins: [],
};
export default config;
