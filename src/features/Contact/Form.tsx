import { ErrorRounded as ErrorIcon, SendRounded as SendIcon, CheckCircleRounded as SuccessIcon } from "@mui/icons-material";
import { Unstable_Grid2 as Grid, Theme, useMediaQuery } from "@mui/material";
import React, { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { object, string } from "nope-validator";

import FormValues from "./FormValues";
import { LoadingButton } from "@mui/lab";
import PersonalInfo from "./PersonalInfo";
import TextField from "./TextField";
import { nopeResolver } from "@hookform/resolvers/nope";
import submitContactForm from "./submitContactForm";
import useSx from "./useFormSx";

const schema = object().shape({
  name: string().required(),
  email: string().email().required(),
  subject: string().required(),
  message: string().required()
});

const Form: FC = () => {
  const sx = useSx();
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
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Grid container spacing={6} disableEqualOverflow>
        <Grid xs={12} md={4}>
          <PersonalInfo />
        </Grid>
        <Grid container spacing={2} xs={12} md>
          <Grid xs={12} sm={6}>
            <TextField
              name="name"
              control={control}
              label="Name"
              autoComplete="name"
              disabled={sendEmailStatus === "loading"}
            />
          </Grid>
          <Grid xs={12} sm={6}>
            <TextField
              name="email"
              control={control}
              label="Email"
              autoComplete="email"
              disabled={sendEmailStatus === "loading"}
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              name="subject"
              control={control}
              label="Subject"
              disabled={sendEmailStatus === "loading"}
            />
          </Grid>
          <Grid xs={12}>
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
  );
};

if (process.env.NODE_ENV === "development") Form.whyDidYouRender = true;

export default Form;