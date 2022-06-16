import { Box, Container, Grid } from "@mui/material";
import React, { memo } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { FavoriteRounded as Favorite } from "@mui/icons-material";
import PropTypes from "prop-types";
import SocialMedia from "components/SocialMedia";
import { Typography } from "@mui/material";
import useSx from "./useFooterSx";

const Footer = ({ sx: sxProp }) => {
  const sx = useSx({ sxProp });
  const year = new Date().getFullYear();
  const { name, contact } = useStaticQuery(graphql`{
    name: contentfulName {
      firstName
      middleName
      lastName
    }
    contact: contentfulContact {
      address
    }
  }`);

  return (
    <Box component="footer" sx={sx.root}>
      <Container>
        <Grid sx={sx.gridContainer} container spacing={1}>
          <Grid item lg="auto" xs={12}>
            <Typography sx={sx.text} variant="body2" gutterBottom>
              {`Copyright © ${year} ${name.lastName.toUpperCase()}, ${name.firstName} ${name.middleName}.`}
            </Typography>
            <Typography sx={sx.text} variant="caption">
              {"Made with "}
              <Favorite color="error" fontSize="inherit" />
              {` in ${contact.address}`}
            </Typography>
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