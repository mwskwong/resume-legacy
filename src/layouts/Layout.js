import { CssBaseline, useMediaQuery } from "@mui/material";
import { lazy, useEffect } from "react";
import { selectThemeMode, setThemeMode } from "features/ThemeModeButton/themeModeSlice";
import { useDispatch, useSelector } from "react-redux";

import BrandingThemeProvider from "components/BrandingThemeProvider";
import PropTypes from "prop-types";

const PWASnackbar = lazy(() => import(/* webpackChunkName: "pwa-snackbar" */ "features/PWASnackbar"));

const Layout = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const themeMode = useSelector(selectThemeMode);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!themeMode) {
      dispatch(setThemeMode(prefersDarkMode ? "dark" : "light"));
    }
  }, [dispatch, prefersDarkMode, themeMode]);

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