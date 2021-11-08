import { DarkModeRounded as DarkMode, LightModeRounded as LightMode } from "@mui/icons-material";

import { IconButton } from "@mui/material";
import { memo } from "react";
import { useColorScheme } from "cssVar";

// import { usePerfectDarkMode } from "gatsby-plugin-perfect-dark-mode";

const ThemeModeButton = () => {
  // const { mode, updateMode } = usePerfectDarkMode();
  const { colorScheme, setColorScheme } = useColorScheme();

  const handleClick = () => setColorScheme(colorScheme === "light" ? "dark" : "light");

  return (
    <IconButton onClick={handleClick} aria-label={colorScheme === "light" ? "turn off the light" : "turn on the light"} edge="end">
      {colorScheme === "light" ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
};

ThemeModeButton.whyDidYouRender = true;

export default memo(ThemeModeButton);