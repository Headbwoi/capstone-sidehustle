module.exports = {
  content: ["index.html"],
  theme: {
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px"
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        formBackground: "hsl(0, 0%, 6%)",
        textLabelHeading: "hsla(0, 0%, 100%, 0.781)",
        formInput: "hsl(0, 0%, 7%)",
        lightPurple: "hsl(300, 20%, 17%)",
      },
    },
  },
  plugins: [],
}
