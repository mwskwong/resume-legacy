// import { CacheProvider } from "@emotion/react";
// import createEmotionServer from "@emotion/server/create-instance";
// import getEmotionCache from "./create-emotion-cache";
// import { renderToString } from "react-dom/server";

// export const replaceRenderer = ({ bodyComponent, setHeadComponents, replaceBodyHTMLString }) => {
//   const cache = getEmotionCache();
//   const { extractCriticalToChunks } = createEmotionServer(cache);

//   const emotionStyles = extractCriticalToChunks(
//     renderToString(<CacheProvider value={cache}>{bodyComponent}</CacheProvider>)
//   );

//   setHeadComponents(
//     emotionStyles.styles.map((style) => (
//       <style
//         data-emotion={`${style.key} ${style.ids.join(" ")}`}
//         key={`emotion-${style.key}`}
//         dangerouslySetInnerHTML={{ __html: style.css }}
//       />
//     ))
//   );

//   replaceBodyHTMLString(emotionStyles.html);
// };

import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "./create-emotion-cache";

export const wrapRootElement = ({ element }) => (
  <CacheProvider value={createEmotionCache()}>
    {element}
  </CacheProvider>
);