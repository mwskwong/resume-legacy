import React from "react";
import { outline } from "../styles";
import { outlinePath } from "./pathData";

const Outline = () => <path d={outlinePath} css={outline} />;

Outline.whyDidYouRender = true;

export default Outline;