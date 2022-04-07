import { ErrorRounded as Error, SendRounded as Send, CheckCircleRounded as Success } from "@mui/icons-material";
import { Grid, useMediaQuery } from "@mui/material";
import { object, string } from "nope-validator";

import { LoadingButton } from "@mui/lab";
import PersonalInfo from "./PersonalInfo";
import TextField from "./TextField";
import { nopeResolver } from "@hookform/resolvers/nope";
import sendEmail from "utils/sendEmail";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useSx from "./useFormSx";

const schema = object().shape({
  name: string().required(),
  email: string().email().required(),
  subject: string().required(),
  message: string().required()
});

const Form = () => {
  const sx = useSx();
  const { control, handleSubmit } = useForm({
    resolver: nopeResolver(schema),
    mode: "onChange",
    defaultValues: { name: "", email: "", subject: "", message: "" }
  });
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
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              name="email"
              control={control}
              label="Email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="subject"
              control={control}
              label="Subject"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="message"
              control={control}
              label="Message"
              multiline
              rows={9}
            />
          </Grid>
        </Grid>
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
  );
};

Form.whyDidYouRender = true;

export default Form;