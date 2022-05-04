import { Suspense, lazy } from "react";
import { graphql, useStaticQuery } from "gatsby";

const Timeline = lazy(() => import("components/Timeline"));

const EducationTimeline = () => {
  const { educationNodes } = useStaticQuery(graphql`{
    educationNodes: allContentfulEducation(sort: {fields: from, order: DESC}) {
      nodes {
        from
        to
        title
        institution
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
  }`);

  const educations = educationNodes.nodes
    .map(({ institution, supportDocuments, ...node }) => ({
      subtitle: institution,
      supportDocuments: supportDocuments?.map(({ title, file, thumbnail }) => ({
        title,
        url: file.localFile.publicURL,
        thumbnail: thumbnail.localFile.childImageSharp
      })),
      ...node
    }));

  return (
    <Suspense>
      <Timeline data={educations} />
    </Suspense>
  );
};

EducationTimeline.whyDidYouRender = true;

export default EducationTimeline;