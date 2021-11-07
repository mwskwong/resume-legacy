import { createSlice } from "@reduxjs/toolkit";

const themeModeSlice = createSlice({
  name: "themeMode",
  initialState: "light",
  reducers: {
    toggleThemeMode: state => state === "light" ? "dark" : "light",
    setThemeMode: (_, action) => action.payload
  }
});

const { actions, reducer } = themeModeSlice;
export const { toggleThemeMode, setThemeMode } = actions;
export default reducer;

export const selectThemeMode = state => state.themeMode;
