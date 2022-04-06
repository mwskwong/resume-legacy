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

export const onClientEntry = () => {
  if (process.env.NODE_ENV === "development") {
    const React = require("react");
    const whyDidYouRender = require("@welldone-software/why-did-you-render");
    whyDidYouRender(React, {
      trackAllPureComponents: true,
      exclude: [/RouterImpl/, /SideEffect\(NullComponent\)/]
    });
  }
};

export const onServiceWorkerUpdateReady = () => window.location.reload();