import { Fragment, StrictMode, Suspense, lazy } from "react";

import BrandingThemeProvider from "components/BrandingThemeProvider";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import store from "store";

const PWASnackbar = lazy(() => import("features/PWASnackbar"));

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
  <Fragment>
    {element}
    <Suspense fallback={null}>
      <PWASnackbar />
    </Suspense>
  </Fragment>
);