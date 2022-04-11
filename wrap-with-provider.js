import { CssBaseline, ThemeProvider } from "@mui/material";

import { StrictMode } from "react";
import brandingTheme from "brandingTheme";

const wrapWithProvider = ({ element }) => (
  <StrictMode>
    <ThemeProvider theme={brandingTheme}>
      <CssBaseline enableColorScheme />
      {element}
    </ThemeProvider>
  </StrictMode>
);

export default wrapWithProvider;
