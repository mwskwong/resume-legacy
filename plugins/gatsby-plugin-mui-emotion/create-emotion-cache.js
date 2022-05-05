import createCache from "@emotion/cache";

export default function getEmotionCache() {
  return createCache({ key: "css", prepend: true });
}

export const createEmotionCache = () => createCache({ key: "css", prepend: true });

export const emotionCache = createEmotionCache();