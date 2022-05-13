import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { StrictMode } from "react";

import brandingTheme from "brandingTheme";

export const wrapRootElement = ({ element }) => (
  <StrictMode>
    <ThemeProvider theme={brandingTheme}>
      <CssBaseline enableColorScheme />
      {element}
    </ThemeProvider>
  </StrictMode>
);
