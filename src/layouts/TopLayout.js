import BrandingThemeProvider from "components/BrandingThemeProvider";
import { CssBaseline } from "@mui/material";
import PropTypes from "prop-types";
import { lazy } from "react";
import { usePerfectDarkMode } from "gatsby-plugin-perfect-dark-mode";

const PWASnackbar = lazy(() => import(/* webpackChunkName: "pwa-snackbar" */ "features/PWASnackbar"));

const TopLayout = ({ children }) => {
  const { mode } = usePerfectDarkMode();

  return (
    <BrandingThemeProvider mode={mode}>
      <CssBaseline enableColorScheme />
      {children}
      <PWASnackbar />
    </BrandingThemeProvider>
  );
};

TopLayout.propTypes = {
  children: PropTypes.node
};
TopLayout.whyDidYouRender = true;

export default TopLayout;