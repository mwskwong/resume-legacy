import { Box, Container, Grid } from "@mui/material";

import { CONTACT } from "constants/nav";
import HexSlice6 from "components/icons/HexSlice6";
import PersonalInfo from "./PersonalInfo";
import SectionHeader from "components/SectionHeader";
import loadable from "@loadable/component";
import useSx from "./useContactSx";

const ContactForm = loadable(() => import("./ContactForm"));

const Contact = () => {
  const sx = useSx();

  return (
    <Box sx={sx.root} component="section" id={CONTACT.id}>
      <Container>
        <SectionHeader
          heading="Get In Touch"
          Icon={HexSlice6}
        />
        <Box sx={sx.gridContainer}>
          <Grid container spacing={2}>
            <Grid item md={4} xs={12}>
              <PersonalInfo />
            </Grid>
            <Grid item md xs={12}>
              <ContactForm />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

Contact.whyDidYouRender = true;

export default Contact;