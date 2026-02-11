/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "var(--color-dark)",
        light: "var(--color-light)",
        blue: "var(--color-blue)",

        primary: "var(--color-primary)",
        "primary-light": "var(--color-primary-light)",
        "primary-lighter": "var(--color-primary-lighter)",

        secondary: "var(--color-secondary)",
        "primary-dark": "var(--color-primary-dark)",
        "primary-darker": "var(--color-primary-darker)",

        accent: "var(--color-accent)",
        highlight: "var(--color-highlight)",

        header: "var(--color-header)",
        subtitle: "var(--color-subtitle)",
        borderC: "var(--color-borderC)",
        "border-highlight": "var(--color-border-highlight)"

      },
      screens: {
        // sm: "576px",
        md: "768px",
        // lg: "10",
        xl: "1280px",
        "2xl": "1536px"
      }
    },
  },
  plugins: [

  ],
}

