import { Box, Container, Grid, Stack } from "@mui/material";

import { CONTACT } from "constants/nav";
import ContactForm from "./ContactForm";
import HexSlice6 from "components/icons/HexSlice6";
import PersonalInfo from "./PersonalInfo";
import SectionHeader from "components/SectionHeader";
import { memo } from "react";
import useSx from "./useContactSx";

const Contact = () => {
  const sx = useSx();

  return (
    <Box sx={sx.root} component="section" id={CONTACT.id}>
      <Container>
        <Stack spacing={6}>
          <SectionHeader
            heading="Get In Touch"
            Icon={HexSlice6}
          />
          <div>
            <Grid container spacing={2}>
              <Grid item md={4} xs={12}>
                <PersonalInfo />
              </Grid>
              <Grid item md xs={12}>
                <ContactForm />
              </Grid>
            </Grid>
          </div>
        </Stack>
      </Container>
    </Box>
  );
};

Contact.whyDidYouRender = true;

export default memo(Contact);