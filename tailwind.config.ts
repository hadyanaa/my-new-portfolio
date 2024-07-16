import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '100px',
        'xs': '480px',    // Ukuran layar tambahan
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
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
