import createCache from "@emotion/cache";

const getEmotionCache = () => {
  return createCache({ key: "css" });
};

export default getEmotionCache;
