/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        lightBlue: "#2964e3"
      },
      backgroundImage: {
        'home-bg': "url('https://whatifgaming.com/wp-content/uploads/2022/04/My-Gaming-Room-Tour-2022-Dream-Small-Room-Setup-_-Boss-Lucio-14-44-screenshot.jpg')"
        // 'home-bg': "url('/assets/home-bg.jpg')"
      }
    },
  },
  plugins: [],
};
