import { FC as ReactFC } from "react";

interface FC<P> extends ReactFC<P> {
  muiName?: string,
  whyDidYouRender: boolean
}

export default FC;
