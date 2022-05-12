import { Box, Container, Stack } from "@mui/material";
import { Suspense, lazy, memo } from "react";

import { CONTACT } from "constants/nav";
import FormFallback from "./FormFallback";
import PropTypes from "prop-types";
import SectionHeader from "components/SectionHeader";

const Form = lazy(() => import("./Form"));

const Contact = ({ sx }) => (
  <Box sx={sx} component="section" id={CONTACT.id}>
    <Container>
      <Stack spacing={6}>
        <SectionHeader heading="Get In Touch" />
        <Suspense fallback={<FormFallback />}>
          <Form />
        </Suspense>
      </Stack>
    </Container>
  </Box>
);

Contact.propTypes = {
  sx: PropTypes.object
};

Contact.whyDidYouRender = true;

export default memo(Contact);