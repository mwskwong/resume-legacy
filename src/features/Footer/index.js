import { Suspense, lazy } from "react";

import Placeholder from "./Placeholder";
import PropTypes from "prop-types";

const Footer = lazy(() => import("./Footer"));

const LazyFooter = ({ sx }) => (
  <Suspense fallback={<Placeholder sx={sx} />}>
    <Footer sx={sx} />
  </Suspense>
);

LazyFooter.propTypes = {
  sx: PropTypes.object
};

LazyFooter.whyDidYouRender = true;

export default LazyFooter;