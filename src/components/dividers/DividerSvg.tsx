import { Box, BoxProps } from "@mui/material";
import React, { FC } from "react";

import useSx from "./useDividerSvgSx";

const DividerSvg: FC<BoxProps<"svg">> = ({ sx: sxProp, ...props }) => {
  const sx = useSx({ sx: sxProp });

  return (
    <Box
      component="svg"
      sx={sx.root}
      {...props}
    />
  );
};

DividerSvg.whyDidYouRender = true;

export default DividerSvg;