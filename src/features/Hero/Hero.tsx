import { Box, Button, Container, Typography, useMediaQuery } from "@mui/material";
import React, { FC, memo, useEffect, useMemo, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { HOME } from "constants/nav";
import { SectionProps } from "types";
import SocialMedia from "components/SocialMedia";
import TypeIt from "typeit";
import useSx from "./useHeroSx";

const Hero: FC<SectionProps> = ({ sx: sxProp }) => {
  const sx = useSx(sxProp);
  const preferReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const typeItRef = useRef();
  const { name, allContentfulOccupation: { nodes: occupations }, resume } = useStaticQuery<Queries.HeroQuery>(graphql`
    query Hero {
      name: contentfulName {
        firstName
        lastName
      }
      allContentfulOccupation(sort: {fields: priority}) {
        nodes {
          title
        }
      }
      resume: contentfulAsset(title: {eq: "Resume"}) {
        publicUrl
      }
    }
  `);

  const strings = useMemo(() => [
    ...occupations.map(({ title }) => `A ${title}.`),
    `${name?.firstName} ${name?.lastName}.`
  ], [name?.firstName, name?.lastName, occupations]);

  useEffect(() => {
    if (!preferReducedMotion) {
      const delays = {
        beforeTyping: 375,
        afterTyping: 1500
      };

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: TypeIt is not working with TS yet
      const typeIt = new TypeIt(typeItRef.current, {
        startDelay: delays.afterTyping,
        startDelete: true,
        breakLines: false,
        loop: true,
        nextStringDelay: 0,
        loopDelay: 0
      })
        .delete(null, { delay: delays.beforeTyping });

      for (let i = 0; i < strings.length; i++) {
        typeIt.type(strings[i], { delay: delays.afterTyping });
        if (i !== strings.length - 1) {
          typeIt.delete(null, { delay: delays.beforeTyping });
        }
      }

      typeIt.go();

      return () => typeIt.destroy();
    }
  }, [preferReducedMotion, strings]);

  return (
    <Container component="section" sx={sx.container} id={HOME.id}>
      <Typography variant="h4" component="div" sx={sx.greetings}>
        Greetings
      </Typography>
      <Typography variant="h1" sx={sx.title}>
        {"I Am "}
        <Box ref={typeItRef} component="span" sx={sx.typeIt}>
          {strings[strings.length - 1]}
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
