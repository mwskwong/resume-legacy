import { graphql, useStaticQuery } from "gatsby";

import Timeline from "components/Timeline";
import dayjs from "dayjs";

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
    .map(({ node: { from, to, institution, document, ...node } }) => ({
      from: dayjs(from).format("MMM YYYY"),
      to: dayjs(to).format("MMM YYYY"),
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