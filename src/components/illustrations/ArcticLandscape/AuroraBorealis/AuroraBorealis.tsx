import React, { FC } from "react";

import Fill from "./Fill";
import Outlines from "./Outline";

const AuroraBorealis: FC = () => (
  <>
    <Fill />
    <Outlines />
  </>
);

if (process.env.NODE_ENV === "development") AuroraBorealis.whyDidYouRender = true;

export default AuroraBorealis;