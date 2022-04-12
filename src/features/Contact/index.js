import { Suspense, lazy } from "react";

import Placeholder from "./Placeholder";
import PropTypes from "prop-types";

const Contact = lazy(() => import("./Contact"));

const LazyContact = ({ sx }) => (
  <Suspense fallback={<Placeholder sx={sx} />}>
    <Contact sx={sx} />
  </Suspense>
);

LazyContact.propTypes = {
  sx: PropTypes.object
};

LazyContact.whyDidYouRender = true;

export default LazyContact;