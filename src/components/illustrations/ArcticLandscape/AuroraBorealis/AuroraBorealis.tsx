import { FC } from "types";
import Fill from "./Fill";
import Outlines from "./Outline";
import React from "react";

const AuroraBorealis: FC = () => (
  <>
    <Fill />
    <Outlines />
  </>
);

AuroraBorealis.whyDidYouRender = true;

export default AuroraBorealis;