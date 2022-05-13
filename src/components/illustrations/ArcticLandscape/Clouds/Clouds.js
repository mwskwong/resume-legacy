import Fills from "./Fills";
import { Fragment } from "react";
import Outlines from "./Outlines";

const Clouds = () => (
  <Fragment>
    <Fills />
    <Outlines />
  </Fragment>
);

Clouds.whyDidYouRender = true;

export default Clouds; 