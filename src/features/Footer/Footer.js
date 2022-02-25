import { Box, Container, Grid } from "@mui/material";

import CopyrightStatement from "./CopyrightStatement";
import PropTypes from "prop-types";
import SocialMedia from "components/SocialMedia";
import { memo } from "react";
import useSx from "./useFooterSx";

const Footer = ({ sx: sxProp }) => {
  const sx = useSx({ sxProp });

  return (
    <Box component="footer" sx={sx.root}>
      <Container>
        <Grid sx={sx.gridContainer} container>
          <Grid item sm="auto" xs={12}>
            <CopyrightStatement />
          </Grid>
          <Grid item sm="auto" xs={12}>
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