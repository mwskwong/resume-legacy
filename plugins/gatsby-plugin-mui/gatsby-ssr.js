import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import getEmotionCache from "./getEmotionCache";
import { renderToString } from "react-dom/server";

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
        key={style.key}
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ))
  );

  // render the result from `extractCritical`
  replaceBodyHTMLString(emotionStyles.html);
};