import { graphql, useStaticQuery } from "gatsby";

import ExpTimeline from "components/ExpTimeline";

const EducationTimeline = () => {
  const { educationNodes } = useStaticQuery(graphql`{
    educationNodes: allContentfulEducation(sort: {fields: from, order: DESC}) {
      nodes {
        from
        to
        title
        institution
        document {
          localFile {
            publicURL
          }
        }
      }
    }
  }`);

  const educations = educationNodes.nodes
    .map(({ institution, document, ...node }) => ({
      subtitle: institution,
      fileUrl: document ? document.localFile.publicURL : undefined,
      ...node
    }));

  return <ExpTimeline data={educations} />;
};

EducationTimeline.whyDidYouRender = true;

export default EducationTimeline;