import { Fragment, StrictMode } from "react";

import BrandingThemeProvider from "components/BrandingThemeProvider";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import loadable from "@loadable/component";
import store from "store";

const PWASnackbar = loadable(() => import("features/PWASnackbar"), { ssr: false });

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
    <PWASnackbar />
  </Fragment>
);