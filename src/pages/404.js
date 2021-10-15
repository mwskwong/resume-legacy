import { Button, Container, Stack, Typography } from "@mui/material";

import { Link } from "gatsby";
import SEO from "components/SEO";
import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  content: {
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  }
}), []);

const NotFoundPage = () => {
  const sx = useSx();

  return (
    <Container component="main">
      <SEO title="Not Found" />
      <Stack spacing={4} sx={sx.content}>
        <Typography variant="h1">
          404
        </Typography>
        <Typography variant="h5">
          The page you were looking for does not exist.
        </Typography>
        <Button variant="contained" color="secondary" size="large" component={Link} to="/">
          go back to home
        </Button>
      </Stack>
    </Container>
  );
};

NotFoundPage.whyDidYouRender = true;

export default NotFoundPage;
