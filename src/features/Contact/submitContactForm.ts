import { SuccessBody } from "@formspree/core/forms";

const url = "https://formspree.io/f/mrgjykpa";

type SubmitContactForm = (arg: { name: string, email: string, subject: string, message: string }) => Promise<SuccessBody>;

const submitContactForm: SubmitContactForm = async ({ name, email, subject, message }) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name,
      email,
      message,
      subject: `[mwskwong.com] ${subject}`
    })
  });

  if (!response.ok) throw Error(response.statusText);

  const body = await response.json();
  if (!body?.ok) throw Error(body);
  return body;
};

export default submitContactForm;