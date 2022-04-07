import { Box, Container, Stack } from "@mui/material";
import { Suspense, lazy, memo } from "react";

import { CONTACT } from "constants/nav";
import FormPlaceholder from "./FormPlaceholder";
import PropTypes from "prop-types";
import SectionHeader from "components/SectionHeader";
import useSx from "./useContactSx";

const Form = lazy(() => import("./Form"));

const Contact = ({ sx: sxProp }) => {
  const sx = useSx({ sxProp });

  return (
    <Box sx={sx.root} component="section" id={CONTACT.id}>
      <Container>
        <Stack spacing={6}>
          <SectionHeader heading="Get In Touch" />
          <Suspense fallback={<FormPlaceholder />}>
            <Form />
          </Suspense>
        </Stack>
      </Container>
    </Box>
  );
};

Contact.propTypes = {
  sx: PropTypes.object
};

Contact.whyDidYouRender = true;

export default memo(Contact);