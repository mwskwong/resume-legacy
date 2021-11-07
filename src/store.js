import { loadState, saveState } from "browserStorage";

import { configureStore } from "@reduxjs/toolkit";
import debounce from "lodash/debounce";
import swStatus from "features/PWASnackbar/swStatusSlice";
import themeMode from "features/ThemeModeButton/themeModeSlice";

const store = configureStore({
  reducer: {
    swStatus,
    themeMode
  },
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: loadState()
});

store.subscribe(debounce(() => saveState({
  themeMode: store.getState().themeMode
}), 800));

export default store;