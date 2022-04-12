import { Suspense, lazy } from "react";

import Placeholder from "./Placeholder";
import PropTypes from "prop-types";

const Work = lazy(() => import("./Work"));

const LazyWork = ({ sx }) => (
  <Suspense fallback={<Placeholder sx={sx} />}>
    <Work sx={sx} />
  </Suspense>
);

LazyWork.propTypes = {
  sx: PropTypes.object
};

LazyWork.whyDidYouRender = true;

export default LazyWork;