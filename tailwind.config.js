export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        milk: "#FFFDF9",
        peach: "#FFA48B",
        mint: "#BDE8D6",
        cocoa: "#6B4B3E",
        denim: "#557C93",
      },
      fontFamily: {
        display: ["Baloo 2", "system-ui", "sans-serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 24px rgba(107,75,62,0.08)",
      },
    },
  },
  plugins: [],
};
