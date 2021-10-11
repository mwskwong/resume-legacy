import { serviceWorkerUpdateReady } from "features/PWASnackbar/serviceWorkerStatusSlice";
import store from "store";

export { wrapPageElement, wrapRootElement } from "./wrap-elements";

export const onClientEntry = () => {
  require("./wdyr");
};

export const onServiceWorkerUpdateReady = () => {
  console.log("New content is available and will be used after reloading.");
  store.dispatch(serviceWorkerUpdateReady());
};