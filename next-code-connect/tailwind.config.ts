import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          '0': "#81FE88",
          '1': '#BFFFC3',
          '2': "#132E35",
        },
        cinza: {
          '100': "#E1E1E1",
          '200': "#BCBCBC",
          '300': '#888888',
          '400': '#3E3E3F',
          '500': '#171D1F',
          '600': '#01080E',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
