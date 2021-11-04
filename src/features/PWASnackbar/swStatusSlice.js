import { createSlice } from "@reduxjs/toolkit";

export const swStatus = {
  UPDATE_READY: "UPDATE_READY"
};

const swStatusSlice = createSlice({
  name: "swStatus",
  initialState: null,
  reducers: {
    swUpdateReady: () => swStatus.UPDATE_READY
  }
});

const { actions, reducer } = swStatusSlice;
export const { swUpdateReady } = actions;
export default reducer;

export const selectSwStatus = state => state.swStatus;
