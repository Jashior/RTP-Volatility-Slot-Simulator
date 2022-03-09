module.exports = {
  content: ["./src/**/*.{html,ts}"],
  purge: {
    enabled: process.env.TAILWIND_MODE === "build",
    content: ["./src/**/*.{html,scss,ts}"],
  },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
