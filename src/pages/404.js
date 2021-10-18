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
  404: {
    fontFamily: "Azonix, sans-serif",
    color: "primary.main"
  },
  notFound: {
    my: 4
  }
}), []);

const NotFoundPage = () => {
  const sx = useSx();

  return (
    <Container component="main">
      <SEO title="Not Found" />
      <Typography variant="h1" sx={sx[404]}>
        404
      </Typography>
      <Typography variant="h5" sx={sx.notFound}>
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
