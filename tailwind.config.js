/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C96A85",
        secondary: "#572459",
        contact_bg: '#212529',
        footer_text:'#BCBCBCFA',
        text_home: '#606060FA',
        navbar: '#572459',
        // skyblue: '#daf0ff',
      },
    },
  },
  plugins: [],
};
