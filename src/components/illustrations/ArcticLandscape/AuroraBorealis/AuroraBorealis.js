import Fill from "./Fill";
import { Fragment } from "react";
import Outlines from "./Outline";

const AuroraBorealis = () => (
  <Fragment>
    <Fill />
    <Outlines />
  </Fragment>
);

AuroraBorealis.whyDidYouRender = true;

export default AuroraBorealis;