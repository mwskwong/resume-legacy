import { Button, Container, Typography } from "@mui/material";
import React, { FC } from "react";

import { KeyboardArrowLeftRounded as ArrowLeft } from "@mui/icons-material";
import { Link } from "gatsby";
import SEO from "components/SEO";
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
  404: {
    color: "primary.main",
    fontSize: "5rem"
  },
  notFound: {
    typography: "h5",
    my: 4,
    textAlign: "center"
  }
});

const NotFoundPage: FC = () => {
  const sx = useSx();

  return (
    <Container component="main" sx={sx.root}>
      <Typography variant="h1" sx={sx["404"]}>
        404
      </Typography>
      <Typography component="h1" sx={sx.notFound}>
        The page you were looking for does not exist.
      </Typography>
      <Button variant="contained" size="large" startIcon={<ArrowLeft />} component={Link} to="/">
        back to home
      </Button>
    </Container>
  );
};

if (process.env.NODE_ENV === "development") NotFoundPage.whyDidYouRender = true;

export const Head: FC = () => <SEO title="Not Found" description="Sorry, there is nothing at this URL." />;

export default NotFoundPage;
