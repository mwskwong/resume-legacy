import { Fragment, StrictMode } from "react";

import BrandingThemeProvider from "components/BrandingThemeProvider";
import { CssBaseline } from "@mui/material";
import ErrorBoundary from "components/ErrorBoundary";
import { Provider } from "react-redux";
import loadable from "@loadable/component";
import store from "store";

const PWASnackbar = loadable(() => import("features/PWASnackbar"));

export const wrapRootElement = ({ element }) => (
  <StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <BrandingThemeProvider>
          <CssBaseline />
          {element}
        </BrandingThemeProvider>
      </Provider>
    </ErrorBoundary>
  </StrictMode>
);

export const wrapPageElement = ({ element }) => (
  <Fragment>
    {element}
    <PWASnackbar />
  </Fragment>
);