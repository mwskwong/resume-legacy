import { Button, Container, Typography } from "@mui/material";

import { Link } from "gatsby";
import SEO from "components/SEO";
import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  },
  noMatch: {
    fontFamily: "Azonix, sans-serif",
    textAlign: "center",
    mb: 4,
    color: "primary.main"
  },
  noMatchMessage: {
    textAlign: "center",
    mb: 4
  }
}), []);

const NotFoundPage = () => {
  const sx = useSx();

  return (
    <Container component="main" sx={sx.root}>
      <SEO title="Not Found" />
      <Typography variant="h1" sx={sx.noMatch}>
        404
      </Typography>
      <Typography variant="h5" sx={sx.noMatchMessage}>
        The page you were looking for does not exist.
      </Typography>
      <Button variant="contained" color="secondary" size="large" component={Link} to="/">
        go back to home
      </Button>
    </Container>
  );
};

NotFoundPage.whyDidYouRender = true;

export default NotFoundPage;