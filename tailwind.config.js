/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs", // Add this to include your EJS templates
    "./public/**/*.html", // Include static HTML files if any
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
