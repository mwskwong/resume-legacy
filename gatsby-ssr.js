import { CssBaseline, ThemeProvider } from "@mui/material";
import { StrictMode, Suspense, lazy } from "react";

import { Provider } from "react-redux";
import brandingTheme from "brandingTheme";
import store from "store";

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