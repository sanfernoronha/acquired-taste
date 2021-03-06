module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        "14": "14px",
      },
    },
    container: {
      padding: "1rem",
    },
    fontFamily: {
      sans: [
        "Roboto",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        "ui-serif",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif",
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      animation: ["motion-safe"],
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
