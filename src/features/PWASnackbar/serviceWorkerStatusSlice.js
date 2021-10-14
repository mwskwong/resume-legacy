import { createSlice } from "@reduxjs/toolkit";

export const serviceWorkerStatus = {
  UPDATE_READY: "UPDATE_READY"
};

const serviceWorkerStatusSlice = createSlice({
  name: "serviceWorkerStatus",
  initialState: null,
  reducers: {
    serviceWorkerUpdateReady: () => serviceWorkerStatus.UPDATE_READY
  }
});

const { actions, reducer } = serviceWorkerStatusSlice;
export const { serviceWorkerUpdateReady } = actions;
export default reducer;

export const selectServiceWorkerStatus = state => state.serviceWorkerStatus;
