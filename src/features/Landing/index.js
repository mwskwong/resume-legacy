import { Suspense, lazy } from "react";

import Placeholder from "./Placeholder";
import PropTypes from "prop-types";

const Landing = lazy(() => import("./Landing"));

const LazyLanding = ({ sx }) => (
  <Suspense fallback={<Placeholder sx={sx} />}>
    <Landing sx={sx} />
  </Suspense>
);

LazyLanding.propTypes = {
  sx: PropTypes.object
};

LazyLanding.whyDidYouRender = true;

export default LazyLanding;