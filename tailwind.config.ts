import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        creme: "#FAF9F7",
        nude: "#F6E7DB",
        perzik: "#F7C3B8",
        oudrose: "#E0A4A6",
        terracotta: "#DD9388",
        choco: "#6C3523",
        "choco-soft": "#8A5240",
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        body: ["Montserrat", "system-ui", "sans-serif"],
        script: ['"Petit Formal Script"', "cursive"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(2deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) both",
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
