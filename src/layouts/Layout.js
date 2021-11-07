import { lazy, useEffect } from "react";
import { selectThemeMode, setThemeMode } from "features/ThemeModeButton/themeModeSlice";

import BrandingThemeProvider from "components/BrandingThemeProvider";
import { CssBaseline } from "@mui/material";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const PWASnackbar = lazy(() => import(/* webpackChunkName: "pwa-snackbar" */ "features/PWASnackbar"));

const Layout = ({ children }) => {
  const themeMode = useSelector(selectThemeMode);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    setThemeMode(prefersDarkMode ? "dark" : "light");
  }, []);

  return (
    <BrandingThemeProvider mode={themeMode}>
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