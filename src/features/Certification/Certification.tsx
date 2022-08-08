import { Box, Container, List, Stack } from "@mui/material";
import React, { FC, memo } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { CERTIFICATION } from "constants/nav";
import CertListItem from "./CertListItem";
import SectionHeading from "components/SectionHeading";
import { SectionProps } from "types";
import useSx from "./useCertificationSx";

const Certification: FC<SectionProps> = ({ sx: sxProp }) => {
  const sx = useSx(sxProp);
  const { allContentfulCertification: { nodes: certifications } } = useStaticQuery<Queries.CertificationQuery>(graphql`
    query Certification {
      allContentfulCertification {
        nodes {
          name
          organization
          issuedDate
          expirationDate
          file {
            publicUrl
          }
        }
      }
    }
  `);

  return (
    <Box component="section" id={CERTIFICATION.id} sx={sx.root}>
      <Container>
        <Stack spacing={6} sx={sx.stack}>
          <SectionHeading heading="Certifications" />
          <List sx={sx.list}>
            {certifications.map(({ file, ...props }) => (
              <CertListItem
                key={props.name}
                {...props}
                url={file?.publicUrl}
              />
            ))}
          </List>
        </Stack>
      </Container>
    </Box>
  );
};

if (process.env.NODE_ENV === "development") Certification.whyDidYouRender = true;

export default memo(Certification);