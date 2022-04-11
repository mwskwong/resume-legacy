import { graphql, useStaticQuery } from "gatsby";

import ExpTimeline from "components/ExpTimeline";

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
      fileUrl: document ? document.localFile.publicURL : undefined,
      contents: jobDuties,
      ...node
    }));

  return <ExpTimeline data={works} />;
};

WorkTimeline.whyDidYouRender = true;

export default WorkTimeline;