import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { StrictMode } from "react";

import { Script } from "gatsby";
import brandingTheme from "brandingTheme";

export const wrapRootElement = ({ element }) => (
  <StrictMode>
    <ThemeProvider theme={brandingTheme}>
      <CssBaseline enableColorScheme />
      {element}
    </ThemeProvider>
    <Script
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={"{\"token\": \"3b6f8c2bc3c7427bad1e76e99f56fdcb\"}"}
      strategy="off-main-thread"
    />
  </StrictMode>
);
