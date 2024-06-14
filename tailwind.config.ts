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
        primary: '#FFFFFF',
        secondary: '#9290C3',
        accent: '#1B1A55',
        background: '#070F2B',
      },
    },
  },
  plugins: [],
};
export default config;
