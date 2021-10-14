import { Container, Divider, Grid } from "@mui/material";
import { Fragment, memo } from "react";

import CopyrightStatement from "./CopyrightStatement";
import SocialMedia from "components/SocialMedia";
import useSx from "./useFooterSx";

const Footer = () => {
  const sx = useSx();

  return (
    <Fragment>
      <Divider />
      <Container component="footer" sx={sx.root}>
        <Grid sx={sx.gridContainer} container>
          <Grid item sm="auto" xs={12}>
            <CopyrightStatement />
          </Grid>
          <Grid item sm="auto" xs={12}>
            <SocialMedia />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

Footer.whyDidYouRender = true;

export default memo(Footer);