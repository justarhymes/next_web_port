import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "wdd-pink": "#e643e0",
        "wdd-blue": "#43d1e6",
        "wdd-orange": "#db9f67",
        "wdd-bg": "#282c34",
        "wdd-text": "#abb2bf",
        "wdd-text2": "#5c6370",
      },
      fontFamily: {
        hack: ['var(--font-hack)']
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translate3d(-20%, 0, 0)" },
          "100%": { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 400ms ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
