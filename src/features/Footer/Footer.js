import { Box, Container, Grid } from "@mui/material";
import React, { memo } from "react";

import CopyrightStatement from "./CopyrightStatement";
import PropTypes from "prop-types";
import SocialMedia from "components/SocialMedia";
import useSx from "./useFooterSx";

const Footer = ({ sx: sxProp }) => {
  const sx = useSx({ sxProp });

  return (
    <Box component="footer" sx={sx.root}>
      <Container>
        <Grid sx={sx.gridContainer} container spacing={1}>
          <Grid item lg="auto" xs={12}>
            <CopyrightStatement />
          </Grid>
          <Grid item lg="auto" xs={12}>
            <SocialMedia />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

Footer.propTypes = {
  sx: PropTypes.object
};

Footer.whyDidYouRender = true;

export default memo(Footer);