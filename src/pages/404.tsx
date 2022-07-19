import { Box, Button, Container, Typography } from "@mui/material";
import React, { FC } from "react";

import Arctic404 from "components/illustrations/Arctic404";
import { KeyboardArrowLeftRounded as ArrowLeft } from "@mui/icons-material";
import GlobalHead from "components/GlobalHead";
import { Link } from "gatsby";
import { UseSx } from "types";

const useSx: UseSx = () => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    py: 4
  },
  animationContainer: {
    width: "100%",
    maxWidth: 430
  },
  notFound: {
    my: 4,
    textAlign: "center"
  }
});

const NotFoundPage: FC = () => {
  const sx = useSx();

  return (
    <Container component="main" sx={sx.root}>
      <Box sx={sx.animationContainer}>
        <Arctic404 />
      </Box>
      <Typography variant="h5" component="h1" sx={sx.notFound}>
        The page you were looking for does not exist.
      </Typography>
      <Button variant="outlined" color="inherit" size="large" startIcon={<ArrowLeft />} component={Link} to="/">
        back to home
      </Button>
    </Container>
  );
};

if (process.env.NODE_ENV === "development") NotFoundPage.whyDidYouRender = true;

export const Head: FC = () => <GlobalHead title="Not Found" />;

export default NotFoundPage;
