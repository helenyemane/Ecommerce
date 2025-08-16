/**@type {import('tailwindcss').Config}*/
export default {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          green: "var(--green)",
          "bright-green": "var(--bright-green)",
          orange: "var(--orange)",
          red: "var(--red)",
          yellow: "var(--yellow)",
          teal: "var(--teal)",
          gray: "var(--gray)",
        },
        fontFamily: {
          poppins: "var(--font-poppins), sans-serif",
        },
      },
    },
    plugins: [],
  }