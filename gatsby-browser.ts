/* eslint-disable @typescript-eslint/no-var-requires */

import { GatsbyBrowser } from "gatsby";

export { wrapRootElement } from "./gatsby-shared";

export const onClientEntry: GatsbyBrowser["onClientEntry"] = () => {
  if (process.env.NODE_ENV === "development") {
    const React = require("react");
    const whyDidYouRender = require("@welldone-software/why-did-you-render");

    whyDidYouRender(React, {
      trackAllPureComponents: true
    });
  }
};

export const onServiceWorkerUpdateReady: GatsbyBrowser["onServiceWorkerUpdateReady"] = () => window.location.reload();
