import React, { FC, useId } from "react";

import GleamGradient from "./GleamGradient";
import { fillPath } from "./pathData";

const Fill: FC = () => {
  const gradientId = useId();

  return (
    <>
      <GleamGradient gradientId={gradientId} />
      <path fill={`url(#${gradientId})`} d={fillPath} />
    </>
  );
};

if (process.env.NODE_ENV === "development") Fill.whyDidYouRender = true;

export default Fill;