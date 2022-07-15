import React, { FC } from "react";

import GleamGradient from "./GleamGradient";
import { fillPath } from "./pathData";

const Fill: FC = () => {
  const gradientId = "gleam-gradient";

  return (
    <>
      <GleamGradient gradientId={gradientId} />
      <path fill={`url(#${gradientId})`} d={fillPath} />
    </>
  );
};

Fill.whyDidYouRender = true;

export default Fill;