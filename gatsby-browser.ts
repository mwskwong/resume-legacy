import { GatsbyBrowser } from "gatsby";

export { wrapRootElement } from "./gatsby-shared";

export const onClientEntry: GatsbyBrowser["onClientEntry"] = () => {
  if (process.env.NODE_ENV === "development") {
    (async () => {
      const [React, { default: whyDidYouRender }] = await Promise.all([
        import("react"),
        import("@welldone-software/why-did-you-render")
      ]);

      whyDidYouRender(React, {
        trackAllPureComponents: true,
        exclude: [/RouterImpl/, /SideEffect\(NullComponent\)/]
      });
    })();
  }
};

export const onServiceWorkerUpdateReady: GatsbyBrowser["onServiceWorkerUpdateReady"] = () => window.location.reload();
