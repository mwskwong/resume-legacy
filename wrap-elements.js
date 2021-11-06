import { StrictMode, Suspense, lazy } from "react";

import BrandingThemeProvider from "components/BrandingThemeProvider";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import store from "store";

const PWASnackbar = lazy(() => import(/* webpackChunkName: "pwa-snackbar" */ "features/PWASnackbar"));

export const wrapRootElement = ({ element }) => (
  <StrictMode>
    <Provider store={store}>
      <BrandingThemeProvider>
        <CssBaseline />
        {element}
      </BrandingThemeProvider>
    </Provider>
  </StrictMode>
);

export const wrapPageElement = ({ element }) => (
  <Suspense fallback={null}>
    {element}
    <PWASnackbar />
  </Suspense>
);
