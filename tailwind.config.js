/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#00586D",
        secondary: "#6AE9C8",
        tertiary: "#EF9A91",
        quaternary: "#EF9A91",
        success: "#00A389",
        error: "#EF9A91",
        warning: "#00A389",
        info: "#58CDFF",
        tranparent: {
          DEFAULT: "#AB54DB26",
          50: "#AB54DB1A",
          100: "#AB54DB33",
          200: "#AB54DB4C",
          300: "#AB54DB66",
          400: "#AB54DB7F",
          500: "#AB54DB99",
          600: "#AB54DBB2",
          700: "#AB54DBC6",
          800: "#AB54DBDD",
          900: "#AB54DBF6",
        },
      },
      fontFamily: {
        "inter-black": ["Inter-Black", "sans-serif"],
        "inter-bold": ["Inter-Bold", "sans-serif"],
        "inter-extrabold": ["Inter-ExtraBold", "sans-serif"],
        "inter-extralight": ["Inter-ExtraLight", "sans-serif"],
        "inter-light": ["Inter-Light", "sans-serif"],
        "inter-medium": ["Inter-Medium", "sans-serif"],
        "inter-regular": ["Inter-Regular", "sans-serif"],
        "inter-semibold": ["Inter-SemiBold", "sans-serif"],
        "inter-thin": ["Inter-Thin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
