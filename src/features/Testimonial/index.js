import { Suspense, lazy } from "react";

import Placeholder from "./Placeholder";
import PropTypes from "prop-types";

const Testimonial = lazy(() => import("./Testimonial"));

const LazyTestimonial = ({ sx }) => (
  <Suspense fallback={<Placeholder sx={sx} />}>
    <Testimonial sx={sx} />
  </Suspense>
);

LazyTestimonial.propTypes = {
  sx: PropTypes.object
};

LazyTestimonial.whyDidYouRender = true;

export default LazyTestimonial;