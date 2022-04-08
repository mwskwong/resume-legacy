import { Box, Container, Stack } from "@mui/material";

import { CONTACT } from "constants/nav";
import Form from "./Form";
import PropTypes from "prop-types";
import SectionHeader from "components/SectionHeader";
import { memo } from "react";

const Contact = ({ sx }) => (
  <Box sx={sx} component="section" id={CONTACT.id}>
    <Container>
      <Stack spacing={6}>
        <SectionHeader heading="Get In Touch" />
        <Form />
      </Stack>
    </Container>
  </Box>
);

Contact.propTypes = {
  sx: PropTypes.object
};

Contact.whyDidYouRender = true;

export default memo(Contact);