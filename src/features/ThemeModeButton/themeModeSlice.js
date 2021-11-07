import { createSlice } from "@reduxjs/toolkit";

const prefersDarkMode = window && window.matchMedia("(prefers-color-scheme: dark)");

const themeModeSlice = createSlice({
  name: "themeMode",
  initialState: prefersDarkMode ? "dark" : "light",
  reducers: {
    toggleThemeMode: state => state === "light" ? "dark" : "light"
  }
});

const { actions, reducer } = themeModeSlice;
export const { toggleThemeMode } = actions;
export default reducer;

export const selectThemeMode = state => state.themeMode;
