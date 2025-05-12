// tailwind.config.js
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {},
  },

  plugins: [daisyui],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0D47A1",
          secondary: "#FF6F00",
          accent: "#00C853",
          neutral: "#263238",
          "base-100": "#F5F5F5",
          info: "#0288D1",
          success: "#2E7D32",
          warning: "#F9A825",
          error: "#C62828",
        },
      },
      "dark", // optional built-in themes - triggers automatically when user on dark mode!
    ],
  },
};
