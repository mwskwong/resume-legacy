import { FC as ReactFC } from "react";

interface FC<P> extends ReactFC<P> {
  whyDidYouRender: boolean
}

export default FC;
