import { Box, Typography } from "@mui/material";
import React, { FC, useEffect, useMemo, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";

import useSx from "./useTitleSx";

const Title: FC = () => {
  const sx = useSx();
  const typeItRef = useRef();
  const elemRef = useRef();
  const { name, allContentfulOccupation: { nodes: occupations } } = useStaticQuery<Queries.HeroTitleQuery>(graphql`
    query HeroTitle {
      name: contentfulName {
        firstName
        lastName
      }
      allContentfulOccupation(sort: {fields: title}) {
        nodes {
          title
        }
      }
    }
  `);

  const strings = useMemo(() => [
    ...occupations.map(({ title }) => `A ${title}.`),
    `${name?.firstName} ${name?.lastName}.`
  ], [name?.firstName, name?.lastName, occupations]);

  useEffect(() => {
    import("typeit")
      .then(TypeIt => {
        const delays = {
          beforeTyping: 375,
          afterTyping: 1500
        };

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: TypeIt is not working with TS yet
        typeItRef.current = new TypeIt(elemRef.current, {
          startDelay: delays.afterTyping,
          startDelete: true,
          breakLines: false,
          loop: true,
          nextStringDelay: 0,
          loopDelay: 0
        })
          .delete(null, { delay: delays.beforeTyping });

        for (let i = 0; i < strings.length; i++) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore: TypeIt is not working with TS yet
          typeItRef.current?.type(strings[i], { delay: delays.afterTyping });
          if (i !== strings.length - 1) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore: TypeIt is not working with TS yet
            typeItRef.current?.delete(null, { delay: delays.beforeTyping });
          }
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: TypeIt is not working with TS yet
        typeItRef.current.go();
      });


    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: TypeIt is not working with TS yet
    return () => typeItRef.current && typeItRef.current.destroy();
  }, [strings]);

  return (
    <Typography sx={sx.title} variant="h1">
      {"I Am "}
      <Box ref={elemRef} component="span" sx={sx.typeIt}>
        {strings[strings.length - 1]}
      </Box>
    </Typography>
  );
};

if (process.env.NODE_ENV === "development") Title.whyDidYouRender = true;

export default Title;