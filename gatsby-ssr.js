import { CssBaseline, ThemeProvider } from "@mui/material";

import { StrictMode } from "react";
import brandingTheme from "brandingTheme";

export const wrapRootElement = ({ element }) => (
  <StrictMode>
    {element}
  </StrictMode>
);

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={brandingTheme}>
    <CssBaseline enableColorScheme />
    {element}
  </ThemeProvider>
);