import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "browserStorage";

const localState = loadState();
console.log("called");

const themeModeSlice = createSlice({
  name: "themeMode",
  initialState: localState?.themeMode || "light",
  reducers: {
    toggleThemeMode: state => state === "light" ? "dark" : "light",
    setThemeMode: (_, action) => action.payload
  }
});

const { actions, reducer } = themeModeSlice;
export const { toggleThemeMode, setThemeMode } = actions;
export default reducer;

export const selectThemeMode = state => state.themeMode;
