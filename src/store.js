import { configureStore } from "@reduxjs/toolkit";
import swStatus from "features/PWASnackbar/swStatusSlice";
import themeMode from "features/ThemeModeButton/themeModeSlice";

const store = configureStore({
  reducer: {
    swStatus,
    themeMode
  },
  devTools: process.env.NODE_ENV !== "production"
});

export default store;