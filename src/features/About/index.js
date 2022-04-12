import { Suspense, lazy } from "react";

import Placeholder from "./Placeholder";
import PropTypes from "prop-types";

const About = lazy(() => import("./About"));

const LazyAbout = ({ sx }) => (
  <Suspense fallback={<Placeholder sx={sx} />}>
    <About sx={sx} />
  </Suspense>
);

LazyAbout.propTypes = {
  sx: PropTypes.object
};


LazyAbout.whyDidYouRender = true;

export default LazyAbout;