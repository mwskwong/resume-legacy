import { Unstable_Grid2 as Grid, Stack, Typography } from "@mui/material";
import React, { FC, memo } from "react";
import { graphql, useStaticQuery } from "gatsby";

import CertAndCourseCard from "components/CertAndCourseCard";
import dateTimeFormat from "utils/dateTimeFormat";
import useSx from "./useCertificationsSx";

const Certifications: FC = () => {
  const sx = useSx();
  const { allContentfulCertification: { nodes: certifications } } = useStaticQuery<Queries.CertificationsQuery>(graphql`
    query Certifications {
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
    <Stack spacing={2}>
      <Typography sx={sx.title} component="h3">
        Certifications
      </Typography>
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

              return (
                <Grid key={name} xs={12} md={6}>
                  <CertAndCourseCard
                    name={name}
                    organization={organization}
                    status={issuedDate ? `${issued} — ${expire}` : issued}
                    certificationUrl={file?.publicUrl}
                  />
                </Grid>
              );
            })}
        </Grid>
      </div>
    </Stack>
  );
};

if (process.env.NODE_ENV === "development") Certifications.whyDidYouRender = true;

export default memo(Certifications);