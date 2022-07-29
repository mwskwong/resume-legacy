import { Box, Container, Grid, Stack, Theme, useMediaQuery } from "@mui/material";
import { ErrorRounded as ErrorIcon, SendRounded as SendIcon, CheckCircleRounded as SuccessIcon } from "@mui/icons-material";
import React, { FC, memo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { object, string } from "nope-validator";

import { CONTACT } from "constants/nav";
import FormValues from "./FormValues";
import { LoadingButton } from "@mui/lab";
import PersonalInfo from "./PersonalInfo";
import PropTypes from "prop-types";
import SectionHeading from "components/SectionHeading";
import { SectionProps } from "types";
import TextField from "./TextField";
import { nopeResolver } from "@hookform/resolvers/nope";
import submitContactForm from "./submitContactForm";
import useSx from "./useContactSx";

const schema = object().shape({
  name: string().required(),
  email: string().email().required(),
  subject: string().required(),
  message: string().required()
});

const Contact: FC<SectionProps> = ({ sx: sxProp }) => {
  const sx = useSx(sxProp);
  const { control, handleSubmit, reset } = useForm<FormValues>({
    resolver: nopeResolver(schema),
    mode: "onChange",
    defaultValues: { name: "", email: "", subject: "", message: "" }
  });
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const [sendEmailStatus, setSendEmailStatus] = useState<"loading" | "success" | "error">();

  const handleFormSubmit: SubmitHandler<FormValues> = data => {
    setSendEmailStatus("loading");
    submitContactForm(data)
      .then(result => {
        if (result.response?.ok) {
          setSendEmailStatus("success");
          reset();
        } else {
          throw new Error();
        }
      })
      .catch(() => setSendEmailStatus("error"));
  };

  return (
    <Box sx={sx.root} component="section" id={CONTACT.id}>
      <Container>
        <Stack spacing={6}>
          <SectionHeading heading="Get In Touch" />
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Grid container spacing={6}>
              <Grid item md={4} xs={12}>
                <PersonalInfo />
              </Grid>
              <Grid container spacing={2} item md xs={12}>
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
                  ? <SuccessIcon />
                  : sendEmailStatus === "error"
                    ? <ErrorIcon />
                    : <SendIcon />
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

if (process.env.NODE_ENV === "development") Contact.whyDidYouRender = true;

export default memo(Contact);