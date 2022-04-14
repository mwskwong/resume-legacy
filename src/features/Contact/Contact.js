import { Box, Container, Grid, Stack, useMediaQuery } from "@mui/material";
import { ErrorRounded as Error, SendRounded as Send, CheckCircleRounded as Success } from "@mui/icons-material";
import { memo, useState } from "react";
import { object, string } from "nope-validator";

import { CONTACT } from "constants/nav";
import { LoadingButton } from "@mui/lab";
import PersonalInfo from "./PersonalInfo";
import PropTypes from "prop-types";
import SectionHeader from "components/SectionHeader";
import TextField from "./TextField";
import { nopeResolver } from "@hookform/resolvers/nope";
import submitContactForm from "./submitContactForm";
import { useForm } from "react-hook-form";
import useSx from "./useContactSx";

const schema = object().shape({
  name: string().required(),
  email: string().email().required(),
  subject: string().required(),
  message: string().required()
});

const Contact = ({ sx: sxProp }) => {
  const sx = useSx({ sxProp });
  const { control, handleSubmit } = useForm({
    resolver: nopeResolver(schema),
    mode: "onChange",
    defaultValues: { name: "", email: "", subject: "", message: "" }
  });
  const smDown = useMediaQuery(theme => theme.breakpoints.down("sm"));
  const [sendEmailStatus, setSendEmailStatus] = useState();

  const handleFormSubmit = data => {
    setSendEmailStatus("loading");
    submitContactForm(data)
      .then(() => setSendEmailStatus("success"))
      .catch(() => setSendEmailStatus("error"));

  };


  return (
    <Box sx={sx.root} component="section" id={CONTACT.id}>
      <Container>
        <Stack spacing={6}>
          <SectionHeader heading="Get In Touch" />
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Grid container spacing={6}>
              <Grid item md={4} xs={12}>
                <PersonalInfo />
              </Grid>
              <Grid container spacing={2} item md xs={12} >
                <Grid item sm={6} xs={12}>
                  <TextField
                    name="name"
                    control={control}
                    label="Name"
                    autoComplete="name"
                    disabled={sendEmailStatus === "loading"}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    name="email"
                    control={control}
                    label="Email"
                    autoComplete="email"
                    disabled={sendEmailStatus === "loading"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="subject"
                    control={control}
                    label="Subject"
                    disabled={sendEmailStatus === "loading"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="message"
                    control={control}
                    label="Message"
                    multiline
                    rows={9}
                    disabled={sendEmailStatus === "loading"}
                  />
                </Grid>
              </Grid>
            </Grid>
            <LoadingButton
              loading={sendEmailStatus === "loading"}
              loadingPosition="end"
              color={sendEmailStatus === "loading" ? undefined : sendEmailStatus}
              endIcon={
                sendEmailStatus === "success"
                  ? <Success />
                  : sendEmailStatus === "error"
                    ? <Error />
                    : <Send />
              }
              sx={sx.submitButton}
              type="submit"
              variant="contained"
              size="large"
              fullWidth={smDown}
            >
              send message
            </LoadingButton>
          </form>
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