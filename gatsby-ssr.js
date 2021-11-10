import { StrictMode, Suspense } from "react";

import { Provider } from "react-redux";
import TopLayout from "layouts/TopLayout";
import store from "store";

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
