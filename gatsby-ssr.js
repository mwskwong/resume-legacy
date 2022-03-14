import { CssBaseline, ThemeProvider } from "@mui/material";
import { StrictMode, Suspense } from "react";

import brandingTheme from "brandingTheme";

export const wrapRootElement = ({ element }) => (
  <StrictMode>
    <Suspense fallback={null}>
      {element}
    </Suspense>
  </StrictMode>
);

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={brandingTheme}>
    <CssBaseline enableColorScheme />
    {element}
  </ThemeProvider>
);