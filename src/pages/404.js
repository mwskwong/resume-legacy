import { Box, Button, Container, Typography } from "@mui/material";

import Arctic404 from "components/Arctic404";
import ChevronLeft from "components/icons/ChevronLeft";
import { Link } from "gatsby";
import SEO from "components/SEO";
import { useMemo } from "react";

const useSx = () => useMemo(() => ({
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
}), []);

const NotFoundPage = () => {
  const sx = useSx();

  return (
    <Container component="main" sx={sx.root}>
      <SEO title="Not Found" />
      <Box sx={sx.animationContainer}>
        <Arctic404 />
      </Box>
      <Typography variant="h5" sx={sx.notFound}>
        The page you were looking for does not exist.
      </Typography>
      <Button
        variant="outlined"
        color="inherit"
        size="large"
        startIcon={<ChevronLeft />}
        component={Link}
        to="/"
      >
        go back
      </Button>
    </Container>
  );
};

NotFoundPage.whyDidYouRender = true;

export default NotFoundPage;
