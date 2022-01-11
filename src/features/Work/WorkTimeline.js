import { graphql, useStaticQuery } from "gatsby";

import Timeline from "components/Timeline";

const WorkTimeline = () => {
  const { workNodes } = useStaticQuery(graphql`{
    workNodes: allContentfulWorkingExperience(sort: {order: DESC, fields: from}) {
      nodes {
        from
        to
        jobTitle
        company
        jobDuties
        document {
          localFile {
            publicURL
          }
        }
      }
    }
  }`);

  const works = workNodes.nodes
    .map(({ jobTitle, company, document, jobDuties, ...node }) => ({
      title: jobTitle,
      subtitle: company,
      fileUrl: document? document.localFile.publicURL: undefined,
      contents: jobDuties,
      ...node
    }));

  return (
    <Timeline data={works} />
  );
};

WorkTimeline.whyDidYouRender = true;

export default WorkTimeline;