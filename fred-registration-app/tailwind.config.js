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
          "neutral": "#f9fafb",
          "base-100": "#ffffff",
          "base-200": "#f6f7f8",
          "success" : "#BBF7D0",
          "warning" : "#fceea2",
          "error" : "#f6cccb",
          "info" : "#000000", // Used for navbar hamburger text
        },
        FREDdarkTheme: {
          "primary": "#001E5D", // Darker shade of blue
          "secondary": "#001133", // Darker shade of navy blue
          "accent": "#6C992F", // Darker shade of green
          "neutral": "#292C34", // Darker shade of gray
          "base-100": "#1A1A1A", // Darker shade of white for background
          "base-200": "#131313", // Darker shade of off-white for secondary background
          "success": "#236b41", // Darker shade of green for success
          "warning": "#827531", // Same shade of yellow for warning
          "error": "#785959", // Darker shade of red for error
          "info" : "#ffffff"// Used for navbar hamburger text
          
        },
        
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

