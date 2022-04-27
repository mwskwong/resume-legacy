import { alpha, darken, lighten, rgbToHex } from "@mui/system";

import defaultTheme from "./defaultTheme";
import nord from "nord";
import systemFonts from "./systemFonts";

console.log(rgbToHex(lighten(nord.nord4, .67)));

const designTokens = mode => ({
  palette: {
    mode,
    common: {
      black: nord.nord0
    },
    primary: {
      // darker and more vibrant version of Nord8 to increase the contrast with light backgrounds
      main: mode === "dark" ? nord.nord8 : "#4a9fb7",
      contrastText: nord.nord1
    },
    secondary: {
      main: nord.nord0,
      contrastText: nord.nord8
    },
    error: {
      main: nord.nord11,
      contrastText: nord.nord6
    },
    warning: {
      main: nord.nord13,
      contrastText: nord.nord1
    },
    info: {
      main: nord.nord7,
      contrastText: nord.nord1
    },
    success: {
      main: nord.nord14,
      contrastText: nord.nord1
    },
    text: {
      primary: mode === "dark" ? nord.nord6 : nord.nord3,
      secondary: mode === "dark" ? darken(nord.nord6, .2) : lighten(nord.nord3, .2),
      disabled: mode === "dark" ? darken(nord.nord6, .4) : lighten(nord.nord3, .4)
    },
    divider: alpha(nord.nord4, mode === "dark" ? .5 : .8),
    background: {
      default: mode === "dark" ? nord.nord0 : "#fff",
      sectionPrimary: mode === "dark" ? nord.nord1 : lighten(nord.nord6, .8),
      sectionSecondary: mode === "dark" ? darken(nord.nord0, .1) : lighten(nord.nord5, .75),
      sectionTertiary: mode === "dark" ? darken(nord.nord0, .2) : lighten(nord.nord4, .67)
    },
    action: {
      active: mode === "dark" ? nord.nord6 : nord.nord3,
      hover: alpha(mode === "dark" ? nord.nord6 : nord.nord3, .04),
      selected: alpha(mode === "dark" ? nord.nord6 : nord.nord3, .08),
      disabled: alpha(mode === "dark" ? nord.nord6 : nord.nord3, .26),
      disabledBackground: alpha(mode === "dark" ? nord.nord6 : nord.nord3, .12),
      focus: alpha(mode === "dark" ? nord.nord6 : nord.nord3, .12)
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

export default designTokens;