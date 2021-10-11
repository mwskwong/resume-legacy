export const onClientEntry = () => {
  if (process.env.NODE_ENV !== "production") {
    const React = require("react");
    const whyDidYouRender = require("@welldone-software/why-did-you-render");
    whyDidYouRender(React);
  }
};