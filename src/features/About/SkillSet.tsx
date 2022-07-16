import {
  AllInclusiveRounded as AllInclusive,
  CloudRounded as Cloud,
  DashboardRounded as Dashboard,
  DevicesOtherRounded as DevicesOther,
  TerminalRounded as Terminal
} from "@mui/icons-material";
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import React, { ElementType, FC } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Database } from "mdi-material-ui";
import camelCase from "camelcase";
import useSx from "./useSkillSetSx";

const Icons: { [key: string]: ElementType } = {
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
      <Typography variant="subtitle2" component="h3" sx={sx.title}>
        Skills
      </Typography>
      <Grid container spacing={6} sx={sx.gridContainer}>
        {skillGroup.map(({ nodes: skills, fieldValue: type }) => {
          const Icon = Icons[camelCase(type || "")];

          return (
            <Grid key={type} item lg={4} sm={6} xs={12}>
              <Stack spacing={2} sx={sx.stack}>
                <Icon sx={sx.icon} />
                <Typography variant="subtitle1" component="h4" sx={sx.subtitle}>
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

SkillSet.whyDidYouRender = true;

export default SkillSet;