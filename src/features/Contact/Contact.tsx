import { Box, Container, Stack } from "@mui/material";
import React, { FC, Suspense, lazy, memo } from "react";

import { CONTACT } from "constants/nav";
import SectionHeading from "components/SectionHeading";
import { SectionProps } from "types";

const Form = lazy(() => import("./Form"));
const FormFallback = () => <Box sx={{ height: { xs: 1097.87, sm: 994.78, md: 549 } }} />;

const Contact: FC<SectionProps> = ({ sx }) => {
  return (
    <Box sx={sx} component="section" id={CONTACT.id}>
      <Container>
        <Stack spacing={6}>
          <SectionHeading heading="Get In Touch" />
          <Suspense fallback={<FormFallback />}>
            <Form />
          </Suspense>
        </Stack>
      </Container>
    </Box>
  );
};

if (process.env.NODE_ENV === "development") Contact.whyDidYouRender = true;

export default memo(Contact);