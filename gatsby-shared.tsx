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
      data-cf-beacon='{"token": "e3f23b72b4274ad9b97eb70a72e51c71"}'
      strategy="idle"
    />
  </StrictMode>
);
