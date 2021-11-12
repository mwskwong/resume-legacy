import { Button, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";

import { HOME } from "constants/nav";
import PropTypes from "prop-types";
import { memo } from "react";
import useSx from "./useLogoSx";

const Logo = ({ sx: sxProp, onClick }) => {
  const sx = useSx({ sxProp });
  const { name } = useStaticQuery(graphql`{
    name: contentfulName {
      firstName
    }
  }`);

  return (
    <Button color="inherit" sx={sx.root} href={`#${HOME.id}`} onClick={onClick}>
      <Typography sx={sx.text} variant="h4" component="span">
        {name.firstName}
      </Typography>
    </Button>
  );
};

Logo.propTypes = {
  sx: PropTypes.object,
  onClick: PropTypes.func
};

Logo.whyDidYouRender = true;

export default memo(Logo);