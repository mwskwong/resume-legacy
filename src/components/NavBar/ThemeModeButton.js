import { DarkModeRounded as DarkMode, LightModeRounded as LightMode } from "@mui/icons-material";

import { IconButton } from "@mui/material";
import { memo } from "react";
import { usePerfectDarkMode } from "gatsby-plugin-perfect-dark-mode";

const ThemeModeButton = () => {
  const { mode, updateMode } = usePerfectDarkMode();

  const handleClick = () => updateMode(mode => mode === "light" ? "dark" : "light");

  return (
    <IconButton onClick={handleClick} aria-label={mode === "light" ? "turn off the light" : "turn on the light"}>
      {mode === "light" ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
};

ThemeModeButton.whyDidYouRender = true;

export default memo(ThemeModeButton);