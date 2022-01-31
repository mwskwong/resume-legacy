import { CssBaseline, ThemeProvider } from "@mui/material";
import { StrictMode, Suspense, lazy } from "react";

import { Provider } from "react-redux";
import brandingTheme from "brandingTheme";
import store from "store";
import { swUpdateReady } from "features/PWASnackbar/swStatusSlice";

const PWASnackbar = lazy(() => import(/* webpackChunkName: "pwa-snackbar" */ "features/PWASnackbar"));

export const wrapRootElement = ({ element }) => (
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={null}>
        {element}
      </Suspense>
    </Provider>
  </StrictMode>
);

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={brandingTheme}>
    <CssBaseline enableColorScheme />
    {element}
    <PWASnackbar />
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

export const onServiceWorkerUpdateReady = () => {
  console.log("New content is available and will be used after reloading.");
  try {
    store.dispatch(swUpdateReady());
  } catch (error) {
    window.location.reload();
  }
};