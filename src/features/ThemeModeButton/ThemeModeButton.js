import { DarkModeRounded as DarkMode, LightModeRounded as LightMode } from "@mui/icons-material";
import { selectThemeMode, toggleThemeMode } from "./themeModeSlice";
import { useDispatch, useSelector } from "react-redux";

import { IconButton } from "@mui/material";
import { memo } from "react";

const ThemeModeButton = () => {
  const themeMode = useSelector(selectThemeMode);
  const dispatch = useDispatch();

  const handleClick = () => dispatch(toggleThemeMode());

  return (
    <IconButton onClick={handleClick} aria-label={themeMode === "light" ? "turn off the light" : "turn on the light"} edge="end">
      {themeMode === "light" ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
};

ThemeModeButton.whyDidYouRender = true;

export default memo(ThemeModeButton);