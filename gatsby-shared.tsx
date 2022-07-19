import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { StrictMode } from "react";

import { GatsbyBrowser } from "gatsby";
import brandingTheme from "brandingTheme";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => (
  <StrictMode>
    <ThemeProvider theme={brandingTheme}>
      <CssBaseline />
      {element}
    </ThemeProvider>
  </StrictMode>
);
