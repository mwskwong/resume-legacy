import { alpha, darken, lighten } from "@mui/system";
import { nord0, nord1, nord11, nord13, nord14, nord3, nord4, nord5, nord6, nord7, nord8 } from "./nord";
import systemFonts, { variable as variableSystemFonts } from "./systemFonts";

import defaultTheme from "./defaultTheme";

const getDesignTokens = mode => ({
  palette: {
    mode,
    common: {
      black: nord0
    },
    primary: {
      main: mode === "light" ? darken(nord8, .2) : nord8,
      contrastText: nord1
    },
    secondary: {
      main: nord0,
      contrastText: nord8
    },
    error: {
      main: nord11,
      contrastText: nord1
    },
    warning: {
      main: nord13,
      contrastText: nord1
    },
    info: {
      main: nord7,
      contrastText: nord1
    },
    success: {
      main: nord14,
      contrastText: nord1
    },
    grey: {
      50: "#F3F6F9",
      100: "#EAEEF3",
      200: "#E5E8EC",
      300: "#D7DCE1",
      400: "#BFC7CF",
      500: "#AAB4BE",
      600: "#7F8E9D",
      700: "#46505A",
      800: "#2F3A45",
      900: "#20262D"
    },
    text: {
      primary: mode === "light" ? nord3 : nord6,
      secondary: mode === "light" ? lighten(nord3, .2) : darken(nord6, .2),
      disabled: mode === "light" ? lighten(nord3, .4) : darken(nord6, .4)
    },
    divider: alpha(nord4, mode === "light" ? .8 : .5),
    background: {
      default: mode === "light" ? "#fff" : nord0,
      sectionPrimary: mode === "light" ? lighten(nord6, .7) : darken(nord0, .1),
      sectionSecondary: mode === "light" ? lighten(nord5, .7) : nord1
    },
    action: {
      active: mode === "light" ? nord3 : nord6,
      hover: alpha(mode === "light" ? nord3 : nord6, .04),
      selected: alpha(mode === "light" ? nord3 : nord6, .08),
      disabled: alpha(mode === "light" ? nord3 : nord6, .26),
      disabledBackground: alpha(mode === "light" ? nord3 : nord6, .12),
      focus: alpha(mode === "light" ? nord3 : nord6, .12)
    }
  },
  spacing: 10,
  shape: {
    borderRadius: 10
  },
  typography: {
    fontFamily: systemFonts.join(","),
    fontWeightExtraBold: 800,
    h1: {
      fontSize: "clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)",
      fontWeight: 800,
      lineHeight: 78 / 70,
      "@supports (font-variation-settings: normal)": {
        fontFamily: variableSystemFonts.join(","),
        fontVariationSettings: "'wght' 800"
      }
    },
    h2: {
      fontSize: "clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)",
      fontWeight: 800,
      lineHeight: 44 / 36,
      "@supports (font-variation-settings: normal)": {
        fontFamily: variableSystemFonts.join(","),
        fontVariationSettings: "'wght' 800"
      }
    },
    h3: {
      fontSize: defaultTheme.typography.pxToRem(36),
      lineHeight: 44 / 36,
      letterSpacing: 0,
      "@supports (font-variation-settings: normal)": {
        fontFamily: variableSystemFonts.join(",")
      }
    },
    h4: {
      fontSize: defaultTheme.typography.pxToRem(28),
      lineHeight: 42 / 28,
      letterSpacing: 0,
      "@supports (font-variation-settings: normal)": {
        fontFamily: variableSystemFonts.join(",")
      }
    },
    h5: {
      fontSize: defaultTheme.typography.pxToRem(24),
      lineHeight: 36 / 24,
      letterSpacing: 0,
      "@supports (font-variation-settings: normal)": {
        fontFamily: variableSystemFonts.join(",")
      }
    },
    h6: {
      fontSize: defaultTheme.typography.pxToRem(20),
      lineHeight: 30 / 20,
      letterSpacing: 0,
      "@supports (font-variation-settings: normal)": {
        fontFamily: variableSystemFonts.join(",")
      }
    },
    button: {
      textTransform: "capitalize",
      fontWeight: 700,
      letterSpacing: 0,
      "@supports (font-variation-settings: normal)": {
        fontFamily: variableSystemFonts.join(","),
        fontVariationSettings: "'wght' 700"
      }
    },
    subtitle1: {
      fontSize: defaultTheme.typography.pxToRem(18),
      lineHeight: 24 / 18,
      letterSpacing: 0,
      fontWeight: 500,
      "@supports (font-variation-settings: normal)": {
        fontFamily: variableSystemFonts.join(","),
        fontVariationSettings: "'wght' 500"
      }
    },
    subtitle2: {
      "@supports (font-variation-settings: normal)": {
        fontFamily: variableSystemFonts.join(",")
      }
    },
    body1: {
      fontSize: defaultTheme.typography.pxToRem(16),
      lineHeight: 24 / 16,
      letterSpacing: 0,
      "@supports (font-variation-settings: normal)": {
        fontFamily: variableSystemFonts.join(",")
      }
    },
    body2: {
      fontSize: defaultTheme.typography.pxToRem(14),
      lineHeight: 21 / 14,
      letterSpacing: 0,
      "@supports (font-variation-settings: normal)": {
        fontFamily: variableSystemFonts.join(",")
      }
    },
    caption: {
      display: "inline-block",
      fontSize: defaultTheme.typography.pxToRem(12),
      lineHeight: 18 / 12,
      letterSpacing: 0,
      fontWeight: 700,
      "@supports (font-variation-settings: normal)": {
        fontFamily: variableSystemFonts.join(","),
        fontVariationSettings: "'wght' 700"
      }
    },
    overline: {
      "@supports (font-variation-settings: normal)": {
        fontFamily: variableSystemFonts.join(",")
      }
    }
  }
});

export default getDesignTokens;