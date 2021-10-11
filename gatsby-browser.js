import { serviceWorkerUpdateReady } from "features/PWASnackbar/serviceWorkerStatusSlice";
import store from "store";

export { wrapPageElement, wrapRootElement } from "./wrap-elements";

export const onClientEntry = () => {
  if (process.env.NODE_ENV !== "production") {
    const React = require("react");
    const whyDidYouRender = require("@welldone-software/why-did-you-render");
    whyDidYouRender(React);
  }
};

export const onServiceWorkerUpdateReady = () => {
  console.log("New content is available and will be used after reloading.");
  store.dispatch(serviceWorkerUpdateReady());
};