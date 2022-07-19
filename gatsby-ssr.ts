import { GatsbySSR } from "gatsby";

export { wrapRootElement } from "./gatsby-shared";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "en" });
};