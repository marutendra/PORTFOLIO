/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#071014",
        panel: "#0D171D",
        line: "#1F313A",
        mint: "#41E6A7",
        cyan: "#44C7F4",
        amber: "#F5B84B",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "Consolas", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(65, 230, 167, 0.12)",
      },
    },
  },
  plugins: [],
};
