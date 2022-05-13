import { Fragment } from "react";
import GleamGradient from "./GleamGradient";
import { fillPath } from "./pathData";

const Fill = () => {
  const gradientId = "gleam-gradient";

  return (
    <Fragment>
      <GleamGradient gradientId={gradientId} />
      <path fill={`url(#${gradientId})`} d={fillPath} />
    </Fragment>
  );
};

Fill.whyDidYouRender = true;

export default Fill;