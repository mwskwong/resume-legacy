/** @jsx jsx */

import { FC } from "react";
import { jsx } from "@emotion/react";
import { outline } from "../styles";
import { outlinePath } from "./pathData";

const Wind: FC = () => <path css={outline} d={outlinePath} />;

Wind.whyDidYouRender = true;

export default Wind;