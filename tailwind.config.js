/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-primary": "#f8f9fc",
        white: "#fff",
        "typography-grey-main": "#71778e",
        "background-divider": "#e1e6ef",
        "gray-400": "#98a2b3",
        "typography-grey-light": "#e5e7eb",
        "neutral-300": "#d7d7d7",
        slategray: "rgba(113, 119, 142, 0.5)",
        "typography-grey-dark": "#14213d",
        "neutral-500": "#7a7a7a",
        'custom-gray': 'rgb(248,249,252)',
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
        "text-md-semibold": "'Plus Jakarta Sans'",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      lg: "18px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq650: {
        raw: "screen and (max-width: 650px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

