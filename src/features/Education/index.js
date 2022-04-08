import { Suspense, lazy } from "react";

import Placeholder from "./Placeholder";
import PropTypes from "prop-types";

const Education = lazy(() => import("./Education"));

const LazyEducation = ({ sx }) => (
  <Suspense fallback={<Placeholder sx={sx} />}>
    <Education sx={sx} />
  </Suspense>
);

LazyEducation.propTypes = {
  sx: PropTypes.object
};

LazyEducation.whyDidYouRender = true;

export default LazyEducation;