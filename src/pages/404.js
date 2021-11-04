import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

import { Link } from "gatsby";
import SEO from "components/SEO";
import loadable from "@loadable/component";

const ArcticOceanFractal = loadable(() => import("arctic-ocean-fractal"), { ssr: false });

const useSx = () => useMemo(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh"
  },
  animationContainer: {
    width: "100%",
    maxWidth: 430,
    aspectRatio: "600 / 487.48"
  },
  404: {
    // Prevent RubikVariable being used
    fontFamily: "Azonix, sans-serif !important",
    color: "primary.main",
    mt: 4
  },
  notFound: {
    my: 4,
    textAlign: "center"
  }
}), []);

const NotFoundPage = () => {
  const sx = useSx();
  const [pose, setPose] = useState("hide");

  useEffect(() => {
    const timeout = setTimeout(() => setPose("show"), 150);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Container component="main" sx={sx.root}>
      <SEO title="Not Found" />
      <Box sx={sx.animationContainer}>
        <ArcticOceanFractal pose={pose} />
      </Box>
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
