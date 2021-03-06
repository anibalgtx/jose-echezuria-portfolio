const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
        'grotesk': ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'wave-divider': "url('/img/Vector.svg')",
        'second-divider': "url('/img/2divider.svg')",
      },
    },
  },
}
