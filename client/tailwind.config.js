/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      container :{
          center: true,
          padding: {
              DEFAULT: "1rem", // ~16px padding on all sides
              sm: "1rem",
              md: "1.5rem",
              lg: "2rem",
              xl: "3rem",
              "2xl": "2.5rem",
          },
          screens: {
              xs: "480px",
              sm: "640px",   // ✅ Small tablets
              md: "768px",   // ✅ Tablets
              lg: "1024px",  // ✅ Laptops
              xl: "1280px",  // ✅ Desktops
              "2xl": "1536px", // ✅ Large desktops
          }
      },
    extend: {
        colors: {
            bg1: "var(--bg1)",
            bg2: "var(--bg2)",
            bg3: "var(--bg3)",
            bg4: "var(--bg4)",
            color: "var(--color)",
            color2: "var(--color2)",
            color3: "var(--color3)",
            color4: "var(--color4)",
            color5: "var(--color5)",
            bcolor1: "var(--bcolor1)",
            bcolor2: "var(--bcolor2)",
        },
    },
  },
  plugins: [],
}

