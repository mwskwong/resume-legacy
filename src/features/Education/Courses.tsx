import { Card, CardActionArea, CardContent, Unstable_Grid2 as Grid, Stack, SvgIconProps, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import React, { ElementType, FC, MouseEvent, memo, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import EnterpriseDB from "components/icons/EnterpriseDB";
import Microsoft from "components/icons/Microsoft";
import MongoDB from "components/icons/MongoDB";
import Oracle from "components/icons/Oracle";
import Udemy from "components/icons/Udemy";
import camelCase from "camelcase";
import useSx from "./useCoursesSx";

const Icons: Record<string, ElementType<SvgIconProps>> = {
  microsoft: Microsoft,
  oracle: Oracle,
  udemy: Udemy,
  enterpriseDb: EnterpriseDB,
  mongoDb: MongoDB
};

const Courses: FC = () => {
  const sx = useSx();
  const [categorySelected, setCategorySelected] = useState("All");
  const { allContentfulCourse: { nodes: courses, distinct: categories } } = useStaticQuery<Queries.CoursesQuery>(graphql`
    query Courses {
      allContentfulCourse(sort: {fields: name}) {
        nodes {
          name
          institution
          certification {
            publicUrl
          }
          category
        }
        distinct(field: category)
      }
    }
  `);

  const handleCategoryChange = (_: MouseEvent<HTMLElement>, category: string | null) => category && setCategorySelected(category);

  return (
    <Stack spacing={2}>
      <Typography sx={sx.title} component="h3">
        Courses
      </Typography>
      <ToggleButtonGroup
        color="primary"
        size="small"
        value={categorySelected}
        onChange={handleCategoryChange}
        exclusive
        aria-label="course categories"
      >
        <ToggleButton value="All">All</ToggleButton>
        {categories.map(category =>
          <ToggleButton key={category} value={category}>{category}</ToggleButton>
        )}
      </ToggleButtonGroup>
      <div>
        <Grid container spacing={2} disableEqualOverflow>
          {courses
            .filter(({ category }) => categorySelected === "All" || category === categorySelected)
            .map(({ name, institution, certification }) => {
              const institutionCamelCase = camelCase(institution);
              const fileUrl = certification?.publicUrl;
              const Icon = Icons[institutionCamelCase];

              const cardContent = (
                <CardContent sx={sx.cardContent}>
                  <Icon fontSize="large" sx={sx.icon} />
                  <div>
                    <Typography>{name}</Typography>
                    <Typography variant="body2" color={`${institutionCamelCase}.main`}>{institution}</Typography>
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
  );
};

if (process.env.NODE_ENV === "development") Courses.whyDidYouRender = true;

export default memo(Courses);