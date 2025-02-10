/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        xs: "480px", // Custom "xs" breakpoint for screens 480px and above
        sm: "640px", // Default sm breakpoint for screens 640px and above
        md: "768px", // Default md breakpoint for screens 768px and above
        lg: "1024px", // Default lg breakpoint for screens 1024px and above
        xl: "1280px", // Default xl breakpoint for screens 1280px and above
        "2xl": "1536px", // Default 2xl breakpoint for screens 1536px and above
        "3xl": "1800px", // Custom "3xl" breakpoint for screens 1800px and above
      },
    },
  },
  plugins: [],
};
