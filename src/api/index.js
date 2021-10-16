import emailjs from "./emailjs";

export const sendEmail = emailData => emailjs.send("personal_email", "personal_webpage", {
  ...emailData,
  message: emailData.message.split(/\r?\n/g).map(line => line || "\u200b")
});