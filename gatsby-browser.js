export { wrapRootElement } from "./wrap-with-provider";

export const onClientEntry = () => {
  if (process.env.NODE_ENV === "development") {
    const React = require("react");
    const whyDidYouRender = require("@welldone-software/why-did-you-render");
    whyDidYouRender(React, {
      trackAllPureComponents: true,
      exclude: [/RouterImpl/, /SideEffect\(NullComponent\)/]
    });
  }
};

export const onServiceWorkerUpdateReady = () => window.location.reload();