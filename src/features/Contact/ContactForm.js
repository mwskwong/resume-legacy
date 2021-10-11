import {
  ErrorOutlineOutlined,
  SendOutlined,
  CheckCircleOutlined as Success
} from "@mui/icons-material";
import { Grid, TextField, useMediaQuery } from "@mui/material";
import { isEmailValid, isValueEmpty } from "helpers";
import { useRef, useState } from "react";

import { LoadingButton } from "@mui/lab";
import { sendEmail } from "api";
import useSx from "./useContactFormSx";

const defaultMessageData = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

const ContactForm = () => {
  const sx = useSx();
  const smDown = useMediaQuery(theme => theme.breakpoints.down("sm"));
  const emailInputRef = useRef(null);
  const [emailInputErrorMessage, setEmailInputErrorMessage] = useState(null);
  const invalidEmail = Boolean(emailInputErrorMessage);
  const [emailSending, setEmailSending] = useState(false);
  const [emailSendSuccess, setEmailSendSuccess] = useState(undefined);
  const [messageData, setMessageData] = useState(defaultMessageData);

  const validateEmail = value => {
    if (isValueEmpty(value)) {
      return "Email can't be empty";
    }

    if (!isEmailValid(value)) {
      return "Invalid email";
    }

    return null;
  };

  const handleChange = event => {
    if (event.target.id === "email") {
      setEmailInputErrorMessage(validateEmail(event.target.value));
    }

    setMessageData({
      ...messageData,
      [event.target.id]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const emailErrorMessage = validateEmail(messageData.email);
    const invalidEmail = Boolean(emailErrorMessage);
    if (invalidEmail) {
      setEmailInputErrorMessage(emailErrorMessage);
      emailInputRef.current.focus();
      emailInputRef.current.scrollIntoView();
      return false;
    }

    setEmailSending(true);
    setEmailSendSuccess(undefined);
    sendEmail(messageData)
      .then(() => {
        setEmailSendSuccess(true);
      })
      .catch(() => {
        setEmailSendSuccess(false);
      }).finally(() => {
        setEmailSending(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Grid container spacing={4}>
        <Grid item sm={6} xs={12}>
          <TextField
            id="name"
            name="name"
            color="secondary"
            fullWidth
            label="Name"
            autoComplete="name"
            onChange={handleChange}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            ref={emailInputRef}
            id="email"
            name="from"
            color="secondary"
            fullWidth
            required
            label="Email"
            autoComplete="email"
            onChange={handleChange}
            error={invalidEmail}
            helperText={invalidEmail ? emailInputErrorMessage : "*Required"}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="subject"
            name="subject"
            color="secondary"
            fullWidth
            label="Subject"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="message"
            name="body"
            color="secondary"
            fullWidth
            label="Message"
            onChange={handleChange}
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
            ? <ErrorOutlineOutlined />
            : <SendOutlined />
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