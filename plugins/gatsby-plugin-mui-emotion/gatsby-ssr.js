import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import getEmotionCache from "./getEmotionCache";
import { renderToString } from "react-dom/server";

export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();
  headComponents.sort((x, y) => {
    if (x.key === "emotion-css-global" || x.key === "emotion-css") {
      return -1;
    }
    if (y.key === "style") {
      return 1;
    }
    return 0;
  });
  replaceHeadComponents(headComponents);
};

export const replaceRenderer = ({ bodyComponent, setHeadComponents, replaceBodyHTMLString }) => {
  const cache = getEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  const emotionStyles = extractCriticalToChunks(
    renderToString(<CacheProvider value={cache}>{bodyComponent}</CacheProvider>)
  );

  setHeadComponents(
    emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(" ")}`}
        key={`emotion-${style.key}`}
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ))
  );

  replaceBodyHTMLString(emotionStyles.html);
};