import { globalCss } from "@/stitches.config";

export const globalStyle = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    "-webkit-font-smoothing": "antialiased",
  },

  "body, input, textarea, button": {
    fontWeight: 400,
  },

  a: {
    color: "inherit",
  },

  button: {
    cursor: "pointer",
  },
});
