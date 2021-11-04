import { configureStore } from "@reduxjs/toolkit";
import swStatus from "features/PWASnackbar/swStatusSlice";

const store = configureStore({
  reducer: {
    swStatus
  }
});

export default store;