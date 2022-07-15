import { FC as ReactFC } from "react";

interface FC<P = Record<string, unknown>> extends ReactFC<P> {
  muiName?: string,
  whyDidYouRender: boolean
}

export default FC;
