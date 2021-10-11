import { alpha, darken, lighten } from "@mui/system";
import { nord0, nord1, nord11, nord13, nord14, nord3, nord4, nord5, nord6, nord8 } from "./nord";

import defaultTheme from "./defaultTheme";
import systemFonts from "./systemFonts";

const getDesignTokens = mode => ({
  palette: {
    mode,
    common: {
      black: nord0
    },
    primary: {
      main: nord8,
      contrastText: nord6
    },
    secondary: {
      main: nord0,
      contrastText: nord8
    },
    error: {
      main: nord11,
      contrastText: nord3
    },
    warning: {
      main: nord13,
      contrastText: nord3
    },
    info: {
      main: nord8,
      contrastText: nord3
    },
    success: {
      main: nord14,
      contrastText: nord3
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
      sectionPrimary: mode === "light" ? lighten(nord6, .8) : nord1,
      sectionSecondary: mode === "light" ? lighten(nord5, .7) : darken(nord0, .25)
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
      lineHeight: 78 / 70
    },
    h2: {
      fontSize: "clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)",
      fontWeight: 800,
      lineHeight: 44 / 36
    },
    h3: {
      fontSize: defaultTheme.typography.pxToRem(36),
      lineHeight: 44 / 36,
      letterSpacing: 0
    },
    h4: {
      fontSize: defaultTheme.typography.pxToRem(28),
      lineHeight: 42 / 28,
      letterSpacing: 0
    },
    h5: {
      fontSize: defaultTheme.typography.pxToRem(24),
      lineHeight: 36 / 24,
      letterSpacing: 0
    },
    h6: {
      fontSize: defaultTheme.typography.pxToRem(20),
      lineHeight: 30 / 20,
      letterSpacing: 0
    },
    button: {
      textTransform: "capitalize",
      fontWeight: 700,
      letterSpacing: 0
    },
    subtitle1: {
      fontSize: defaultTheme.typography.pxToRem(18),
      lineHeight: 24 / 18,
      letterSpacing: 0,
      fontWeight: 500
    },
    body1: {
      fontSize: defaultTheme.typography.pxToRem(16),
      lineHeight: 24 / 16,
      letterSpacing: 0
    },
    body2: {
      fontSize: defaultTheme.typography.pxToRem(14),
      lineHeight: 21 / 14,
      letterSpacing: 0
    },
    caption: {
      display: "inline-block",
      fontSize: defaultTheme.typography.pxToRem(12),
      lineHeight: 18 / 12,
      letterSpacing: 0,
      fontWeight: 700
    }
  }
});

export default getDesignTokens;