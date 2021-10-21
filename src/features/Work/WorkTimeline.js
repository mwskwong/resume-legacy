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
          file {
            url
          }
        }
      }
    }
  }`);

  const works = workNodes.nodes
    .map(({ jobTitle, company, document, jobDuties, ...node }) => ({
      title: jobTitle,
      subtitle: company,
      fileUrl: document?.file?.url && `https${document?.file?.url}`,
      contents: jobDuties,
      ...node
    }));

  return (
    <div>
      <Timeline data={works} />
    </div>
  );
};

WorkTimeline.whyDidYouRender = true;

export default WorkTimeline;