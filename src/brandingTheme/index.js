import "@fontsource/rubik/variable.css";
import "./riviera.css";

import { createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import getDesignTokens from "./getDesignTokens";
import getThemedComponents from "./getThemedComponents";

const lightTheme = createTheme(getDesignTokens("light"));
const darkTheme = createTheme(getDesignTokens("dark"));

export const brandingLightTheme = deepmerge(lightTheme, getThemedComponents(lightTheme));
export const brandingDarkTheme = deepmerge(darkTheme, getThemedComponents(darkTheme));