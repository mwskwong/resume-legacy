import store from "store";
import { swUpdateReady } from "features/PWASnackbar/swStatusSlice";

export { wrapRootElement } from "./wrap-elements";

export const onClientEntry = () => {
  require("./wdyr");
};

export const onServiceWorkerUpdateReady = () => {
  console.log("New content is available and will be used after reloading.");
  store.dispatch(swUpdateReady());
};