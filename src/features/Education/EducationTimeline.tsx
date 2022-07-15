import React, { FC } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Timeline from "components/Timeline";

const EducationTimeline: FC = () => {
  const { allContentfulEducation: { nodes: educationNodes } } = useStaticQuery<Queries.EducationTimelineQuery>(graphql`
    query EducationTimeline {
      allContentfulEducation(sort: {fields: from, order: DESC}) {
        nodes {
          from
          to
          title
          institution
          supportDocuments {
            title
            file {
              localFile {
                publicURL
              }
            }
            thumbnail {
              gatsbyImage(aspectRatio: 1.5, width: 102)
            }
          }
        }
      }
    }
  `);

  const educations = educationNodes
    .map(({ from, to, title, institution, supportDocuments }) => ({
      from: from ?? "",
      to: to ?? undefined,
      title: title ?? "",
      subtitle: institution ?? "",
      supportDocuments: supportDocuments?.map(supportDocument => ({
        title: supportDocument?.title ?? "",
        url: supportDocument?.file?.localFile?.publicURL ?? "",
        thumbnail: supportDocument?.thumbnail
      }))
    }));

  return <Timeline data={educations} />;
};

EducationTimeline.whyDidYouRender = true;

export default EducationTimeline;