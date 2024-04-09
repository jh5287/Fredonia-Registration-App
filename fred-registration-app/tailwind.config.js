/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        FREDtheme: {
          "primary": "#0033A0",
          "secondary": "#012169",
          "accent": "#8BC53F",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "light", 
      "dark"
    ],
  },
}

