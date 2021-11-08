import { CssBaseline, useMediaQuery } from "@mui/material";

import BrandingThemeProvider from "components/BrandingThemeProvider";
import PropTypes from "prop-types";
import { lazy } from "react";

// import { usePerfectDarkMode } from "gatsby-plugin-perfect-dark-mode";

const PWASnackbar = lazy(() => import(/* webpackChunkName: "pwa-snackbar" */ "features/PWASnackbar"));

const Layout = ({ children }) => {
  // const { mode } = usePerfectDarkMode();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const mode = prefersDarkMode ? "dark" : "light";

  return (
    <BrandingThemeProvider mode={mode}>
      <CssBaseline />
      {children}
      <PWASnackbar />
    </BrandingThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};
Layout.whyDidYouRender = true;

export default Layout;