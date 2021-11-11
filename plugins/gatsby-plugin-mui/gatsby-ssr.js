import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "./createEmotionCache";

// export const replaceRenderer = ({ bodyComponent, setHeadComponents, replaceBodyHTMLString }) => {
//   const cache = createEmotionCache();
//   const { extractCriticalToChunks } = createEmotionServer(cache);

//   const emotionStyles = extractCriticalToChunks(
//     renderToString(<CacheProvider value={cache}>{bodyComponent}</CacheProvider>)
//   );

//   setHeadComponents(
//     emotionStyles.styles.map((style) => (
//       <style
//         data-emotion={`${style.key} ${style.ids.join(" ")}`}
//         key={style.key}
//         dangerouslySetInnerHTML={{ __html: style.css }}
//       />
//     ))
//   );

//   replaceBodyHTMLString(emotionStyles.html);
// };

export const wrapRootElement = ({ element }) => (
  <CacheProvider value={createEmotionCache()}>
    {element}
  </CacheProvider>
);