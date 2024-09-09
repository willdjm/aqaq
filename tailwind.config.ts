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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'blue': {
          950: '#090842'
        },
        'gray': {
          300: '#F5F5F5',
          500: '#959595'
        },
        'green': {
          900: '#034C38'
        },
        'amber': {
          400: '#F3B64B'
        },
        'Pink': {
          500: '#FF00AA'
        },
        'Purple': {
          600: '#FF00AA'
        },
      },
      
    },
  },
  plugins: [],
};
export default config;
