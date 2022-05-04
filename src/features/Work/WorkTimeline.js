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
        supportDocuments {
          title
          file {
            localFile {
              publicURL
            }
          }
          thumbnail {
            localFile {
              childImageSharp {
                gatsbyImageData(aspectRatio: 1.5, width: 102)
              }
            }
          }
        }
      }
    }
  }
`);

  const works = workNodes.nodes
    .map(({ jobTitle, company, jobDuties, supportDocuments, ...node }) => ({
      title: jobTitle,
      subtitle: company,
      contents: jobDuties,
      supportDocuments: supportDocuments?.map(({ title, file, thumbnail }) => ({
        title,
        url: file.localFile.publicURL,
        thumbnail: thumbnail.localFile.childImageSharp
      })),
      ...node
    }));

  return <Timeline data={works} />;
};

WorkTimeline.whyDidYouRender = true;

export default WorkTimeline;