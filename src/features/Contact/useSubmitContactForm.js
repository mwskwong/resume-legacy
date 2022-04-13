import { graphql, useStaticQuery } from "gatsby";

const useSubmitContactForm = () => {
  const { contact } = useStaticQuery(graphql`{
    contact: contentfulContact {
      email
    }
  }`);

  const url = `https://formsubmit.co/ajax/${contact.email}`;

  const submitContactForm = async ({ name, email, subject, message }) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `[mwskwong.com] ${subject}`,
        _template: "table"
      })
    });
    const body = await response.json();
    console.log(body);

    if (!response.ok) throw Error(response.statusText);

    return body;
  };

  return submitContactForm;
};

export default useSubmitContactForm;