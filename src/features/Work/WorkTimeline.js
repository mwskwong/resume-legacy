import { Suspense, lazy } from "react";
import { graphql, useStaticQuery } from "gatsby";

const Timeline = lazy(() => import("components/Timeline"));

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

  return (
    <Suspense>
      <Timeline data={works} />
    </Suspense>
  );
};

WorkTimeline.whyDidYouRender = true;

export default WorkTimeline;