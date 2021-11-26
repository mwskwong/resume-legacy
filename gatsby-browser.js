import { StrictMode, Suspense } from "react";

import { Provider } from "react-redux";
import TopLayout from "layouts/TopLayout";
import store from "store";
import { swUpdateReady } from "features/PWASnackbar/swStatusSlice";

export const wrapRootElement = ({ element }) => (
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={null}>
        {element}
      </Suspense>
    </Provider>
  </StrictMode>
);

export const wrapPageElement = ({ element }) => (
  <TopLayout>
    {element}
  </TopLayout>
);

export const onClientEntry = () => {
  if (process.env.NODE_ENV === "development") {
    const React = require("react");
    const whyDidYouRender = require("@welldone-software/why-did-you-render");
    whyDidYouRender(React, {
      trackAllPureComponents: true
    });
  }
};

export const onServiceWorkerUpdateReady = () => {
  console.log("New content is available and will be used after reloading.");
  try {
    store.dispatch(swUpdateReady());
  } catch (error) {
    window.location.reload();
  }
};