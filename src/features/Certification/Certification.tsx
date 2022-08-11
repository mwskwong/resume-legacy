import { Box, Card, CardActionArea, CardContent, Container, Unstable_Grid2 as Grid, Stack, SvgIconProps, Typography } from "@mui/material";
import React, { ElementType, FC, memo } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { CERTIFICATION } from "constants/nav";
import MongoDB from "components/icons/MongoDB";
import SectionHeading from "components/SectionHeading";
import { SectionProps } from "types";
import camelCase from "camelcase";
import dateTimeFormat from "utils/dateTimeFormat";
import useSx from "./useCertificationSx";

const Icons: Record<string, ElementType<SvgIconProps>> = {
  mongoDb: MongoDB
};


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
        <Stack spacing={6}>
          <SectionHeading heading="Certifications" />
          <div>
            <Grid container spacing={2} disableEqualOverflow>
              {certifications
                .map(({ name, organization, issuedDate, expirationDate, file }) => {
                  const issued = issuedDate
                    ? `Issued ${dateTimeFormat.format(new Date(issuedDate))}`
                    : "In Progress";
                  const expire = expirationDate
                    ? `Expires ${dateTimeFormat.format(new Date(expirationDate))}`
                    : "Never Expire";
                  const fileUrl = file?.publicUrl;

                  const organizationCamelCase = camelCase(organization);
                  const Icon = Icons[organizationCamelCase];
                  const cardContent = (
                    <CardContent sx={sx.cardContent}>
                      <Icon fontSize="large" sx={sx.icon} />
                      <div>
                        <Typography>{name}</Typography>
                        <Typography variant="body2" color={`${organizationCamelCase}.main`}>{organization}</Typography>
                        <Typography variant="body2" sx={sx.dates}>
                          {issued}
                          {issuedDate && ` — ${expire}`}
                        </Typography>
                      </div>
                    </CardContent>
                  );

                  return (
                    <Grid key={name} xs={12} md={6}>
                      <Card>
                        {fileUrl
                          ? (
                            <CardActionArea href={fileUrl}>
                              {cardContent}
                            </CardActionArea>
                          )
                          : cardContent
                        }
                      </Card>
                    </Grid>
                  );
                })}
            </Grid>
          </div>
        </Stack>
      </Container>
    </Box>
  );
};

if (process.env.NODE_ENV === "development") Certification.whyDidYouRender = true;

export default memo(Certification);