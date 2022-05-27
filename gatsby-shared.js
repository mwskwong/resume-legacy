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
      data-cf-beacon={"{\"token\": \"79283f6990f2443f9864dcf4e424fa30\"}"}
      strategy="off-main-thread"
    />
  </StrictMode>
);
