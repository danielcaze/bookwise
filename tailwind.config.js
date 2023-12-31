/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        default: ["Nunito", "sans-serif"],
      },
      spacing: {
        px: "1px",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        10: "2.5rem",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        bold: "700",
      },
      lineHeight: {
        shorter: "125%",
        short: "140%",
        base: "160%",
        tall: "180%",
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",

        green100: "#50B2C0",
        green200: "#255D6A",
        green300: "#0A313C",

        purple100: "#8381D9",
        purple200: "#2A2879",

        gray100: "#F8F9FC",
        gray200: "#E6E8F2",
        gray300: "#D1D6E4",
        gray400: "#8D95AF",
        gray500: "#303F73",
        gray600: "#252D4A",
        gray700: "#181C2A",
        gray800: "#0E1116",

        danger: "#F75A68",

        "action-hover-purple100": "#8381D906",
        "action-hover-gray200": "#E6E8F206",
      },
      borderRadius: {
        xxs: "2.5px",
        xs: "4px",
        sm: "5px",
        md: "8px",
        lg: "10px",
        xl: "12px",
        "2xl": "20px",
        full: "99999px",
      },
      backgroundImage: {
        "gradient-vertical": `linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)`,
        "gradient-horizontal": `linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)`,
        "gradient-vertical-opaque": `linear-gradient(180deg, #7FD1CC20 0%, #9694F520 100%)`,
        "gradient-horizontal-opaque": `linear-gradient(90deg, #7FD1CC20 0%, #9694F520 100%)`,
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
          to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
