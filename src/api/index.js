import contentful from "./contentful";
import emailjs from "./emailjs";

export const getOccupations = async () => {
  const entries = await contentful.getEntries({ content_type: "occupation", order: "fields.title" });
  return entries.items.map(entry => entry.fields.title);
};

export const getSocialMedia = async () => {
  const entries = await contentful.getEntries({ content_type: "socialMedia", order: "fields.name" });
  return entries.items.map(entry => entry.fields);
};

export const getResumeURL = async () => {
  const asset = await contentful.getAsset("4bn3ILWZxwv2FfY3M1lAEn");
  return asset.fields.file.url;
};

export const getContact = async () => {
  const entries = await contentful.getEntries({ content_type: "contact", order: "-sys.updatedAt" });
  return entries.items?.[0]?.fields;
};

export const sendEmail = messageData => emailjs.send("personal_email", "personal_webpage", {
  ...messageData,
  message: messageData.message.split("\n").map(line => line || "\u200b")
});