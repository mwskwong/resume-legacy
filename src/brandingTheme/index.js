import "@fontsource/rubik/latin-400.css";
import "@fontsource/rubik/latin-500.css";
import "@fontsource/rubik/latin-700.css";
import "@fontsource/rubik/latin-800.css";
import "@fontsource/rubik/variable.css";
import "./riviera.css";

import { createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import designTokens from "./designTokens";
import getThemedComponents from "./getThemedComponents";

const darkTheme = createTheme(designTokens);
const brandingTheme = deepmerge(darkTheme, getThemedComponents(darkTheme));

export default brandingTheme;