import { Box, Button, Container, Typography } from "@mui/material";
import React, { FC, memo } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { HOME } from "constants/nav";
import { SectionProps } from "types";
import SocialMedia from "components/SocialMedia";
import useSx from "./useHeroSx";

const Hero: FC<SectionProps> = ({ sx: sxProp }) => {
  const sx = useSx(sxProp);
  const { name, resume } = useStaticQuery<Queries.HeroQuery>(graphql`
  query Hero {
    name: contentfulName {
      firstName
      lastName
    }
    resume: contentfulAsset(title: {eq: "Resume"}) {
      publicUrl
    }
  }
`);

  return (
    <Container component="section" sx={sx.container} id={HOME.id}>
      <Typography variant="h4" component="div" sx={sx.greetings}>
        Greetings
      </Typography>
      <Typography variant="h1" sx={sx.title}>
        {"I Am "}
        <Box component="span" sx={sx.name}>
          {`${name?.firstName} ${name?.lastName}`}
        </Box>
      </Typography>
      <SocialMedia sx={sx.socialMedia} />
      <Button
        variant="contained"
        size="large"
        component="a"
        href={resume?.publicUrl}
        target="_blank"
      >
        Download Resume
      </Button>
    </Container>
  );
};

if (process.env.NODE_ENV === "development") Hero.whyDidYouRender = true;

export default memo(Hero);
