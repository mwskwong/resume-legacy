import { Fragment, StrictMode } from "react";

import BrandingThemeProvider from "components/BrandingThemeProvider";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import store from "store";

const PWASnackbar = loadable(() => pMinDelay(import("features/PWASnackbar"), 200));

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