import createCache from "@emotion/cache";

export const createEmotionCache = () => createCache({ key: "css" });

export const cache = createEmotionCache();