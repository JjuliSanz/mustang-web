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
        primero: "#111111",
        segundo: "#2D1B0E",
        tercero: "#5A3014",
        cuarto: "#8C5E35",
        quinto: "#C29A6A",
        sexto: "#F5F1E8",
      },
      screens: {
        "900": "900px",
        "850": "850px",
        "500": "500px",
        "400": "400px",
        "450": "450px",
        "600": "600px",
      },
      fontFamily: {
        primary: ["var(--primary-font)"],
      },
    },
  },
  plugins: [],
};
export default config;
