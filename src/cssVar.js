import { brandingDarkTheme, brandingLightTheme } from "brandingTheme";

import { unstable_createCssVarsProvider as createCssVarsProvider } from "@mui/system";

const { CssVarsProvider, useColorScheme, getInitColorSchemeScript } = createCssVarsProvider({
  theme: {
    colorSchemes: {
      light: brandingLightTheme,
      dark: brandingDarkTheme
    }
  },
  defaultColorScheme: "system",
  prefix: "nord",
  shouldSkipGeneratingVar: keys => keys[0] === "typography"
});

export { CssVarsProvider, useColorScheme, getInitColorSchemeScript };