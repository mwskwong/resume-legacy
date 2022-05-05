import { CacheProvider } from "@emotion/react";
import { emotionCache } from "./create-emotion-cache";

export const wrapRootElement = ({ element }) => (
  <CacheProvider value={emotionCache}>
    {element}
  </CacheProvider>
);