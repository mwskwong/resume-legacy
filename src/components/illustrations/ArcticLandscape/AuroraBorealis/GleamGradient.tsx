import React, { FC } from "react";
import { nord10, nord7, nord8, nord9 } from "nord";

type GleamGradientProps = {
  gradientId: string
}

const GleamGradient: FC<GleamGradientProps> = ({ gradientId }) => (
  <defs>
    <linearGradient id={gradientId} x1="50%" x2="50%" y1="0%" y2="100%">
      <stop offset="0%" stopColor={nord7}>
        <animate
          attributeName="stop-color"
          dur="4s"
          repeatCount="indefinite"
          values={`${nord7}; ${nord8}; ${nord7}`}
        />
      </stop>
      <stop offset="50%" stopColor={nord8}>
        <animate
          attributeName="stop-color"
          dur="4s"
          repeatCount="indefinite"
          values={`${nord8}; ${nord9}; ${nord8}`}
        />
      </stop>
      <stop offset="100%" stopColor={nord9}>
        <animate
          attributeName="stop-color"
          dur="4s"
          repeatCount="indefinite"
          values={`${nord9}; ${nord10}; ${nord9}`}
        />
      </stop>
    </linearGradient>
  </defs>
);

if (process.env.NODE_ENV === "development") GleamGradient.whyDidYouRender = true;

export default GleamGradient;