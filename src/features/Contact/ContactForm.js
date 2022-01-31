import { ErrorRounded as Error, SendRounded as Send, CheckCircleRounded as Success } from "@mui/icons-material";
import { Grid, useMediaQuery } from "@mui/material";
import { object, string } from "yup";

import { LoadingButton } from "@mui/lab";
import TextField from "./TextField";
import sendEmail from "utils/sendEmail";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useSx from "./useContactFormSx";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = object({
  name: string().required(),
  email: string().email().required(),
  subject: string().required(),
  message: string().required()
}).required();

const ContactForm = () => {
  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(schema)
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
    console.log(data);
    setSendEmailStatus("loading");
    sendEmail(data)
      .then(() => setSendEmailStatus("success"))
      .catch(() => setSendEmailStatus("error"));
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
      <Grid container spacing={4}>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            label="Name"
            autoComplete="name"
            inputProps={register("name")}
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            name="email"
            fullWidth
            required
            label="Email"
            autoComplete="email"
            inputProps={register("email")}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="subject"
            fullWidth
            label="Subject"
            inputProps={register("subject")}
            error={Boolean(errors.subject)}
            helperText={errors.subject?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="message"
            fullWidth
            label="Message"
            multiline
            rows={9}
            inputProps={register("message")}
            error={Boolean(errors.message)}
            helperText={errors.message?.message}
          />
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

ContactForm.whyDidYouRender = true;

export default ContactForm;