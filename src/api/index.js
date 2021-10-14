import emailjs from "./emailjs";

export const sendEmail = messageData => emailjs.send("personal_email", "personal_webpage", {
  ...messageData,
  message: messageData.message.split("\n").map(line => line || "\u200b")
});