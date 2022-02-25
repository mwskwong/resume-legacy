import { Box, Container, Grid } from "@mui/material";

import CopyrightStatement from "./CopyrightStatement";
import FooterDivider from "components/dividers/Footer";
import { Fragment } from "react";
import SocialMedia from "components/SocialMedia";
import { memo } from "react";
import useSx from "./useFooterSx";

const Footer = () => {
  const sx = useSx();

  return (
    <Fragment>
      <FooterDivider sx={sx.divider} />
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
    </Fragment>
  );
};

Footer.whyDidYouRender = true;

export default memo(Footer);