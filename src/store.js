import { configureStore } from "@reduxjs/toolkit";
import swStatus from "features/PWASnackbar/swStatusSlice";

const store = configureStore({
  reducer: {
    swStatus
  },
  devTools: process.env.NODE_ENV !== "production"
});

export default store;