import { Unstable_Grid2 as Grid, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import React, { FC, MouseEvent, memo, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import CertAndCourseCard from "components/common/CertAndCourseCard";
import useSx from "./useCoursesSx";

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
        Courses & Training
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
            .map(({ name, institution, certification }) => (
              <Grid key={name} xs={12} md={6}>
                <CertAndCourseCard
                  name={name}
                  organization={institution}
                  certificationUrl={certification?.publicUrl}
                  sx={sx.card}
                />
              </Grid>
            ))}
        </Grid>
      </div>
    </Stack>
  );
};

if (process.env.NODE_ENV === "development") Courses.whyDidYouRender = true;

export default memo(Courses);