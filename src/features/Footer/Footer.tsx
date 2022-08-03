import { Box, Container, Grid } from "@mui/material";
import React, { FC, memo } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { FavoriteRounded as Favorite } from "@mui/icons-material";
import PropTypes from "prop-types";
import { SectionProps } from "types";
import SocialMedia from "components/SocialMedia";
import { Typography } from "@mui/material";
import useSx from "./useFooterSx";

const Footer: FC<SectionProps> = ({ sx: sxProp }) => {
  const sx = useSx(sxProp);
  const year = new Date().getFullYear();
  const { name, contact } = useStaticQuery<Queries.FooterQuery>(graphql`
    query Footer {
      name: contentfulName {
        firstName
        middleName
        lastName
      }
      contact: contentfulContact {
        address
      }
    }
  `);

  return (
    <Box component="footer" sx={sx.root}>
      <Container>
        <Grid sx={sx.gridContainer} container spacing={1}>
          <Grid item lg="auto" xs={12}>
            <Typography sx={sx.text} variant="body2">
              {`Copyright © ${year} ${name?.lastName.toUpperCase()}, ${name?.firstName} ${name?.middleName}`}
            </Typography>
            <Typography sx={sx.text} variant="caption">
              {"Made with "}
              <Favorite sx={sx.loveIcon} color="error" fontSize="inherit" />
              {` in ${contact?.address}`}
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

if (process.env.NODE_ENV === "development") Footer.whyDidYouRender = true;

export default memo(Footer);