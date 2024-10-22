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
          "neutral": "#ebebeb",
          "base-100": "#ffffff",
          "base-200": "#f6f7f8",
          "success" : "#BBF7D0",
          "warning" : "#fceea2",
          "error" : "#ffa19e",
          "info" : "#000000", // Used for navbar hamburger text
        },
        FREDdarkTheme: {
          "primary": "#001E5D", // Slightly lighter shade of blue
          "primary-content": "#ffffff",
          "secondary": "#001E3A", // Slightly lighter shade of navy blue
          "accent": "#749B41", // Slightly lighter shade of green
          "neutral": "#40444C", // Slightly lighter shade of gray
          "base-100": "#2D2D2D", // Slightly lighter shade of white for background
          "base-200": "#222222", // Slightly lighter shade of off-white for secondary background
          "success": "#2D6E45", // Slightly lighter shade of green for success
          "warning": "#958741", // Slightly lighter shade of yellow for warning
          "error": "#855452", // Slightly lighter shade of red for error
          "info": "#ffffff" // Used for navbar hamburger text
        }
        
      },
      "light", 
      "dark",
      "retro",
      "cyberpunk",
      "synthwave",
      "forest",
      "coffee",
      "nord",
    ],
  },
}

