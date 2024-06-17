import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        open: ['Inter', 'serif']
      }
    },
    colors: {
      'primary': {
        '50': '#fdf2f8',
        '100': '#fde6f3',
        '200': '#fccee8',
        '300': '#fca5d4',
        '400': '#f86eb6',
        '500': '#f24c9e',
        '600': '#e12176',
        '700': '#c3135c',
        '800': '#a1134c',
        '900': '#861542',
        '950': '#520524',
      },
      'accent': {
        '50': '#eff8ff',
        '100': '#dfefff',
        '200': '#b7e1ff',
        '300': '#77caff',
        '400': '#2fafff',
        '500': '#0495f3',
        '600': '#0076d0',
        '700': '#005da8',
        '800': '#01508b',
        '900': '#073d69',
        '950': '#052a4c',
      },
      'positive': {
        '50': '#f0fdf0',
        '100': '#ddfbdd',
        '200': '#bcf6bd',
        '300': '#88ed8c',
        '400': '#4ddb52',
        '500': '#26c12c',
        '600': '#18981d',
        '700': '#177e1c',
        '800': '#18631b',
        '900': '#155219',
        '950': '#062d09',
      },
      'negative': {
        '50': '#fef2f3',
        '100': '#ffe1e3',
        '200': '#ffc9cd',
        '300': '#fea3a9',
        '400': '#fb6e77',
        '500': '#f2414d',
        '600': '#e12d39',
        '700': '#bc1924',
        '800': '#9b1922',
        '900': '#811b22',
        '950': '#46090d',
      },
      'warning': {
        '50': '#fdf9e9',
        '100': '#fbf2c6',
        '200': '#f9e18f',
        '300': '#f5c94f',
        '400': '#f0b429',
        '500': '#df9913',
        '600': '#c1750d',
        '700': '#9a530e',
        '800': '#7f4214',
        '900': '#6d3616',
        '950': '#3f1b09',
      },


    }
  },
  plugins: [],
};
export default config;
