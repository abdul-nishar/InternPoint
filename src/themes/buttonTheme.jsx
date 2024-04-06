import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const outline = defineStyle({
  borderRadius: "4px",
  fontWeight: "semibold",
  borderColor: "rgba(0, 0, 0, 0)",
  color: "#FFF",
  bg: "#1D1818FF",

  _hover: {
    color: "#FFF",
    bg: "#1D1818FF",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { outline },
  defaultProps: {
    variant: "outline",
  },
});
