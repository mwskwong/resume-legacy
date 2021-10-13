import { graphql, useStaticQuery } from "gatsby";

import loadable from "@loadable/component";

const Timeline = loadable(() => import("components/Timeline"));

const EducationTimeline = () => {
  const { educationNodes } = useStaticQuery(graphql`{
    educationNodes: allContentfulEducation(sort: {fields: from, order: DESC}) {
      edges {
        node {
          from
          to
          title
          institution
          document {
            file {
              url
            }
          }
        }
      }
    }
  }`);



  const educations = educationNodes.edges
    .map(({ node: { institution, document, ...node } }) => ({
      subtitle: institution,
      fileUrl: document.file.url,
      ...node
    }));

  return (
    <Timeline data={educations} />
  );
};

EducationTimeline.whyDidYouRender = true;

export default EducationTimeline;