/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inspiration: ['Inspiration', 'cursive'],
      },
    },
  },
  plugins: [],
  // The 'purge' option is deprecated in Tailwind CSS v3.0 and later.
  // The 'content' option already handles purging, so we can remove the 'purge' option.
  // content: ["./**/*.{html,js}"],
}

