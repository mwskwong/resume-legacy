
const url = "https://formspree.io/f/mrgjykpa";

const submitContactForm = async ({ name, email, subject, message }) => {
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