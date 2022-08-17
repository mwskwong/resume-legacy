import React, { FC } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Timeline from "components/Timeline";

const Experienceimeline: FC = () => {
  const { allContentfulWorkingExperience: { nodes: experienceNodes } } = useStaticQuery<Queries.ExperienceTimelineQuery>(graphql`
    query ExperienceTimeline {
      allContentfulWorkingExperience(sort: {order: DESC, fields: from}) {
        nodes {
          from
          to
          jobTitle
          company
          jobDuties
          supportDocuments {
            title
            file {
              publicUrl
            }
            thumbnail {
              gatsbyImage(aspectRatio: 1.5, width: 102)
            }
          }
        }
      }
    }
  `);

  const experiences = experienceNodes
    .map(({ jobTitle, company, jobDuties, supportDocuments, ...node }) => ({
      title: jobTitle,
      subtitle: company,
      contents: jobDuties,
      supportDocuments: supportDocuments?.map(supportDocument => ({
        title: supportDocument?.title,
        url: supportDocument?.file?.publicUrl,
        thumbnail: supportDocument?.thumbnail?.gatsbyImage
      })),
      ...node
    }));

  return <Timeline data={experiences} />;
};

if (process.env.NODE_ENV === "development") Experienceimeline.whyDidYouRender = true;

export default Experienceimeline;