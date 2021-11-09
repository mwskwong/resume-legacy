import { graphql, useStaticQuery } from "gatsby";

import Timeline from "components/Timeline";

const EducationTimeline = () => {
  const { educationNodes } = useStaticQuery(graphql`{
    educationNodes: allContentfulEducation(sort: {fields: from, order: DESC}) {
      nodes {
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
  }`);

  const educations = educationNodes.nodes
    .map(({ institution, document, ...node }) => ({
      subtitle: institution,
      fileUrl: document?.file?.url,
      ...node
    }));

  return <Timeline data={educations} />;
};

EducationTimeline.whyDidYouRender = true;

export default EducationTimeline;