import React, { FC } from "react";

import { nord6 } from "nord";
import { peaksPath } from "./pathData";

const Peaks: FC = () => <path fill={nord6} d={peaksPath} />;

Peaks.whyDidYouRender = true;

export default Peaks;