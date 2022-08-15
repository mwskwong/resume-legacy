import { siEnterprisedb, siMicrosoft, siMongodb, siOracle, siUdemy } from "simple-icons/icons";

import { ThemeOptions } from "@mui/material";
import { darken } from "@mui/system";
import defaultTheme from "./defaultTheme";
import systemFonts from "./systemFonts";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    microsoft: PaletteColor
    oracle: PaletteColor
    udemy: PaletteColor
    enterpriseDb: PaletteColor
    mongoDb: PaletteColor
  }

  interface PaletteOptions {
    microsoft: PaletteColorOptions
    oracle: PaletteColorOptions
    udemy: PaletteColorOptions
    enterpriseDb: PaletteColorOptions
    mongoDb: PaletteColorOptions
  }

  interface TypeBackground {
    sectionPrimary: string,
    sectionSecondary: string,
    sectionTertiary: string
  }
}

declare module "@mui/material/styles/createTypography" {
  interface TypographyOptions {
    fontWeightExtraBold?: number;
  }

  interface Typography {
    fontWeightExtraBold: number;
  }
}

const designTokens: Omit<ThemeOptions, "components"> = {
  unstable_strictMode: true,
  palette: {
    primary: {
      main: "#0073E6"
    },
    enterpriseDb: {
      main: `#${siEnterprisedb.hex}`
    },
    mongoDb: {
      main: `#${siMongodb.hex}`
    },
    microsoft: {
      main: `#${siMicrosoft.hex}`
    },
    oracle: {
      main: `#${siOracle.hex}`
    },
    udemy: {
      main: `#${siUdemy.hex}`
    },
    background: {
      sectionPrimary: darken(defaultTheme.palette.background.default, .015),
      sectionSecondary: darken(defaultTheme.palette.background.default, .030),
      sectionTertiary: darken(defaultTheme.palette.background.default, .045)
    },
    action: {
      active: defaultTheme.palette.text.primary
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
      fontSize: "clamp(1.5rem, .9643rem + 1.4286vw, 2.25rem)",
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
};

export default designTokens;