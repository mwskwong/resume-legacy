import { Button, Typography } from "@mui/material";
import React, { FC, memo } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { HOME } from "constants/nav";
import useSx from "./useLogoSx";

const Logo: FC = () => {
  const sx = useSx();
  const { name } = useStaticQuery<Queries.LogoQuery>(graphql`
    query Logo {
      name: contentfulName {
        firstName
      }
    }
  `);

  return (
    <Button color="inherit" href={`#${HOME.id}`}>
      <Typography sx={sx.text} variant="h4" component="span">
        {name?.firstName}
      </Typography>
    </Button>
  );
};

Logo.whyDidYouRender = true;

export default memo(Logo);