import { CacheProvider } from "@emotion/react";
import { cache } from "./createEmotionCache";

export const wrapRootElement = ({ element }) => (
  <CacheProvider value={cache}>
    {element}
  </CacheProvider>
);