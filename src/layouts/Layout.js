import BrandingThemeProvider from "components/BrandingThemeProvider";
import { CssBaseline } from "@mui/material";
import PropTypes from "prop-types";
import { lazy } from "react";
import { selectThemeMode } from "features/ThemeModeButton/themeModeSlice";
import { useSelector } from "react-redux";

// import { loadState } from "browserStorage";

const PWASnackbar = lazy(() => import(/* webpackChunkName: "pwa-snackbar" */ "features/PWASnackbar"));

const Layout = ({ children }) => {
  const themeMode = useSelector(selectThemeMode);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const localReduxState = loadState();
  //   console.log(localReduxState);
  //   if (!localReduxState?.themeMode) {
  //     const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
  //     dispatch(setThemeMode(prefersDarkMode ? "dark" : "light"));
  //   }
  // }, [dispatch]);

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