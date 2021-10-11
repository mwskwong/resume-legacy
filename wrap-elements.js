import { Fragment, StrictMode } from "react";

import BrandingThemeProvider from "components/BrandingThemeProvider";
import { CssBaseline } from "@mui/material";
import PWASnackbar from "features/PWASnackbar";
import { Provider } from "react-redux";
import store from "store";

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