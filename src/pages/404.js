import { Button, Container, Stack, Typography } from "@mui/material";

import { Link } from "gatsby";
import SEO from "components/SEO";
import { useMemo } from "react";

const useSx = () => useMemo(() => ({
  content: {
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  },
  404: {
    color: "primary.main"
  }
}), []);

const NotFoundPage = () => {
  const sx = useSx();

  return (
    <Container component="main">
      <SEO title="Not Found" />
      <div>
        <Stack spacing={4} sx={sx.content}>
          <Typography variant="h1" sx={sx[404]}>
            404
          </Typography>
          <Typography variant="h5">
            The page you were looking for does not exist.
          </Typography>
          <Button variant="contained" color="secondary" size="large" component={Link} to="/">
            go back to home
          </Button>
        </Stack>
      </div>
    </Container>
  );
};

NotFoundPage.whyDidYouRender = true;

export default NotFoundPage;
