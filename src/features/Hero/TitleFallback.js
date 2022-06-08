import { Box } from "@mui/material";
import React from "react";

const TitleFallback = () => (
  <Box
    sx={{
      "@media (max-width: 742px)": {
        height: theme => `${theme.typography.h1.lineHeight * 2}em`
      },
      "@media (max-width: 370px)": {
        height: theme => `${theme.typography.h1.lineHeight * 3}em`
      },
      height: theme => `${theme.typography.h1.lineHeight}em`
    }}
  />
);

TitleFallback.whyDidYouRender = true;

export default TitleFallback;