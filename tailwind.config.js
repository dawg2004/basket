/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Driven by CSS variables so a brand swap re-themes the whole system.
        bg: "rgb(var(--c-bg) / <alpha-value>)",
        fg: "rgb(var(--c-fg) / <alpha-value>)",
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        accent: "rgb(var(--c-accent) / <alpha-value>)",
        "accent-hover": "rgb(var(--c-accent-hover) / <alpha-value>)",
        line: "rgb(var(--c-line) / <alpha-value>)",
        surface: "rgb(var(--c-surface) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Playfair Display", "serif"],
        body: ["var(--font-body)", "Noto Sans JP", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.34em",
      },
      maxWidth: {
        shell: "1280px",
      },
    },
  },
  plugins: [],
};
