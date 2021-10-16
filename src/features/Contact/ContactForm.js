import { ErrorRounded as Error, SendRounded as Send, CheckCircleRounded as Success } from "@mui/icons-material";
import { Grid, TextField, useMediaQuery } from "@mui/material";
import { isEmailValid, isValueEmpty } from "helpers";
import { useCallback, useRef, useState } from "react";

import { LoadingButton } from "@mui/lab";
import { sendEmail } from "api";
import useSx from "./useContactFormSx";

const ContactForm = () => {
  const sx = useSx();
  const smDown = useMediaQuery(theme => theme.breakpoints.down("sm"));
  const formRef = useRef();
  const emailInputRef = useRef(null);
  const [emailInputErrorMessage, setEmailInputErrorMessage] = useState(null);
  const invalidEmail = Boolean(emailInputErrorMessage);
  const [emailSending, setEmailSending] = useState(false);
  const [emailSendSuccess, setEmailSendSuccess] = useState(undefined);

  const validateEmail = value => {
    if (isValueEmpty(value)) {
      return "Email can't be empty";
    }

    if (!isEmailValid(value)) {
      return "Invalid email";
    }

    return null;
  };

  const handleEmailChange = useCallback(event => setEmailInputErrorMessage(validateEmail(event.target.value)), []);

  const handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData(formRef.current);
    const emailData = {};
    for (const [key, value] of formData.entries()) {
      emailData[key] = value;
    }

    const emailErrorMessage = validateEmail(emailData.email);
    const invalidEmail = Boolean(emailErrorMessage);
    if (invalidEmail) {
      setEmailInputErrorMessage(emailErrorMessage);
      emailInputRef.current.focus();
      emailInputRef.current.scrollIntoView();
      return false;
    }

    setEmailSending(true);
    setEmailSendSuccess(undefined);
    sendEmail(emailData)
      .then(() => setEmailSendSuccess(true))
      .catch(() => setEmailSendSuccess(false))
      .finally(() => setEmailSending(false));
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      <Grid container spacing={4}>
        <Grid item sm={6} xs={12}>
          <TextField
            name="name"
            color="secondary"
            fullWidth
            label="Name"
            autoComplete="name"
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            ref={emailInputRef}
            name="email"
            color="secondary"
            fullWidth
            required
            label="Email"
            autoComplete="email"
            onChange={handleEmailChange}
            error={invalidEmail}
            helperText={invalidEmail ? emailInputErrorMessage : "*Required"}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="subject"
            color="secondary"
            fullWidth
            label="Subject"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="message"
            color="secondary"
            fullWidth
            label="Message"
            multiline
            rows={9}
          />
        </Grid>
      </Grid>
      <LoadingButton
        loading={emailSending}
        loadingPosition="end"
        color={emailSendSuccess
          ? "success"
          : emailSendSuccess === false
            ? "error"
            : "secondary"
        }
        endIcon={emailSendSuccess
          ? <Success />
          : emailSendSuccess === false
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
  );
};

ContactForm.whyDidYouRender = true;

export default ContactForm;