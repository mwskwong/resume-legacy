import { CssBaseline, ThemeProvider } from "@mui/material";
import { GatsbyBrowser, Script } from "gatsby";
import React, { StrictMode } from "react";

import brandingTheme from "brandingTheme";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => (
  <StrictMode>
    <ThemeProvider theme={brandingTheme}>
      <CssBaseline />
      {element}
    </ThemeProvider>
    <Script
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon='{"token": "598909c0c37347e1b62e72f772ba6199"}'
      strategy="idle"
    />
  </StrictMode>
);
