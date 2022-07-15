import React, { FC } from "react";

import Fill from "./Fill";
import Outlines from "./Outline";

const AuroraBorealis: FC = () => (
  <>
    <Fill />
    <Outlines />
  </>
);

AuroraBorealis.whyDidYouRender = true;

export default AuroraBorealis;