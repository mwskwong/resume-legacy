import AuroraBorealis from "./AuroraBorealis";
import Clouds from "./Clouds";
import { FC } from "types";
import Mountains from "./Mountains";
import React from "react";
import SnowHills from "./SnowHills";
import Wind from "./Wind";

const ArcticLandscape: FC = () => (
  <svg viewBox="0 0 624.443 278.807" xmlns="http://www.w3.org/2000/svg">
    <AuroraBorealis />
    <Clouds />
    <Wind />
    <Mountains />
    <SnowHills />
  </svg>
);

ArcticLandscape.whyDidYouRender = true;

export default ArcticLandscape;