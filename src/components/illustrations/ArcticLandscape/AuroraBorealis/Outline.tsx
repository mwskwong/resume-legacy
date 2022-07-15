/** @jsx jsx */

import { FC } from "react";
import { jsx } from "@emotion/react";
import { outline } from "../styles";
import { outlinePath } from "./pathData";

const Outline: FC = () => <path d={outlinePath} css={outline} />;

Outline.whyDidYouRender = true;

export default Outline;