import React from "react";
import { outline } from "../styles";
import { outlinePath } from "./pathData";

const Wind = () => <path css={outline} p={outlinePath} />;

Wind.whyDidYouRender = true;

export default Wind;