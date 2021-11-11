import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "./createEmotionCache";
import createEmotionServer from "@emotion/server/create-instance";
import { renderToString } from "react-dom/server";

export const replaceRenderer = ({ bodyComponent, setHeadComponents, replaceBodyHTMLString }) => {
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  const emotionStyles = extractCriticalToChunks(
    renderToString(
      <CacheProvider value={cache}>
        {bodyComponent}
      </CacheProvider>
    )
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

  replaceBodyHTMLString(emotionStyles.html);
};