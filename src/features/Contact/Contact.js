import { Box, Container, Grid, Stack, useMediaQuery } from "@mui/material";
import { ErrorRounded as Error, SendRounded as Send, CheckCircleRounded as Success } from "@mui/icons-material";
import { memo, useState } from "react";
import { object, string } from "yup";

import { CONTACT } from "constants/nav";
import { LoadingButton } from "@mui/lab";
import { NoSsr } from "@mui/base";
import PersonalInfo from "./PersonalInfo";
import SectionHeader from "components/SectionHeader";
import TextField from "./TextField";
import sendEmail from "utils/sendEmail";
import { useForm } from "react-hook-form";
import useSx from "./useContactSx";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = object({
  name: string().required(),
  email: string().email().required(),
  subject: string().required(),
  message: string().required()
}).required();

const Contact = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: { name: "", email: "", subject: "", message: "" }
  });
  const sx = useSx();
  const smDown = useMediaQuery(theme => theme.breakpoints.down("sm"));
  const [sendEmailStatus, setSendEmailStatus] = useState();

  const submitButtonColor = sendEmailStatus === "loading"
    ? undefined
    : sendEmailStatus;

  const submitButtonIcon = sendEmailStatus === "success"
    ? <Success />
    : sendEmailStatus === "error"
      ? <Error />
      : <Send />;

  const handleFormSubmit = data => {
    setSendEmailStatus("loading");
    sendEmail(data)
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
              <NoSsr defer>
                <Grid container spacing={2} item md xs={12} >
                  <Grid item sm={6} xs={12}>
                    <TextField
                      name="name"
                      control={control}
                      fullWidth
                      label="Name"
                      autoComplete="name"
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextField
                      name="email"
                      control={control}
                      fullWidth
                      label="Email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="subject"
                      control={control}
                      fullWidth
                      label="Subject"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="message"
                      control={control}
                      fullWidth
                      label="Message"
                      multiline
                      rows={9}
                    />
                  </Grid>
                </Grid>
              </NoSsr>
            </Grid>
            <LoadingButton
              loading={sendEmailStatus === "loading"}
              loadingPosition="end"
              color={submitButtonColor}
              endIcon={submitButtonIcon}
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

Contact.whyDidYouRender = true;

export default memo(Contact);