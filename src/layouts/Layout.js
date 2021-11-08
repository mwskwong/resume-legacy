import BrandingThemeProvider from "components/BrandingThemeProvider";
import { CssBaseline } from "@mui/material";
import PropTypes from "prop-types";
import { lazy } from "react";
import { usePerfectDarkMode } from "gatsby-plugin-perfect-dark-mode";

const PWASnackbar = lazy(() => import(/* webpackChunkName: "pwa-snackbar" */ "features/PWASnackbar"));

const Layout = ({ children }) => {
  const { mode } = usePerfectDarkMode();

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