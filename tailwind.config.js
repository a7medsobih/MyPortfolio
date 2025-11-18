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

        secondary: "var(--color-secondary)",
        "primary-dark": "var(--color-primary-dark)",
        "primary-darker": "var(--color-primary-darker)",

        accent: "var(--color-accent)",
        highlight: "var(--color-highlight)",

        header: "var(--color-header)",
        subtitle: "var(--color-subtitle)",
        borderColor: "var(--color-border)"
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px"
      }
    },
  },
  plugins: [

  ],
}

