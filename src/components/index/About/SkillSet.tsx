import {
  AllInclusiveRounded as AllInclusive,
  CloudRounded as Cloud,
  DashboardRounded as Dashboard,
  DevicesOtherRounded as DevicesOther,
  TerminalRounded as Terminal
} from "@mui/icons-material";
import { Box, Chip, Unstable_Grid2 as Grid, Stack, SvgIconProps, Typography } from "@mui/material";
import React, { ElementType, FC } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Database } from "mdi-material-ui";
import camelCase from "camelcase";
import useSx from "./useSkillSetSx";

const Icons: Record<string, ElementType<SvgIconProps>> = {
  backend: Terminal,
  cloud: Cloud,
  dataOps: AllInclusive,
  database: Database,
  frontend: Dashboard,
  mobile: DevicesOther
};

const SkillSet: FC = () => {
  const sx = useSx();
  const { allContentfulSkill: { group: skillGroup } } = useStaticQuery<Queries.SkillSetQuery>(graphql`
    query SkillSet {
      allContentfulSkill(sort: {fields: [type, name]}) {
        group(field: type) {
          nodes {
            name
            type
          }
          fieldValue
        }
      }
    }
  `);

  return (
    <div>
      <Typography component="h3" sx={sx.title}>
        Skills
      </Typography>
      <Grid container spacing={6} sx={sx.gridContainer} disableEqualOverflow>
        {skillGroup.map(({ nodes: skills, fieldValue: type }) => {
          const Icon = Icons[camelCase(type || "")];

          return (
            <Grid key={type} xs={12} sm={6} lg={4}>
              <Stack spacing={2} sx={sx.stack}>
                <Icon sx={sx.icon} />
                <Typography component="h4" sx={sx.subtitle}>
                  {type}
                </Typography>
                <Box sx={sx.skillsContainer}>
                  {skills.map(({ name }) => (
                    <Chip
                      key={name}
                      sx={sx.skill}
                      label={name}
                      variant="outlined"
                      color="primary"
                    />
                  ))}
                </Box>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

if (process.env.NODE_ENV === "development") SkillSet.whyDidYouRender = true;

export default SkillSet;