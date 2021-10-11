import { configureStore } from "@reduxjs/toolkit";
import serviceWorkerStatus from "features/PWASnackbar/serviceWorkerStatusSlice";

const store = configureStore({
  reducer: {
    serviceWorkerStatus
  }
});

export default store;