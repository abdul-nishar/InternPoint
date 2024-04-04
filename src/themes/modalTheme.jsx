import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  overlay: {
    bg: "#171A1F66",
  },
  dialog: {
    borderRadius: "4px",
    bg: `#FFFFFFFF`,
    padding: "1rem 2rem 4rem",
  },
  header: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
});
