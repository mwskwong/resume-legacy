import { CssBaseline, ThemeProvider } from "@mui/material";

import { StrictMode } from "react";
import { brandingLightTheme } from "brandingTheme";

export const wrapRootElement = ({ element }) => (
  <StrictMode>
    <ThemeProvider theme={brandingLightTheme}>
      <CssBaseline enableColorScheme />
      {element}
    </ThemeProvider>
  </StrictMode>
);
