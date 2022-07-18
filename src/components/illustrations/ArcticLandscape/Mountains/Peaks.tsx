import React, { FC } from "react";

import { nord6 } from "nord";
import { peaksPath } from "./pathData";

const Peaks: FC = () => <path fill={nord6} d={peaksPath} />;

if (process.env.NODE_ENV === "development") Peaks.whyDidYouRender = true;

export default Peaks;