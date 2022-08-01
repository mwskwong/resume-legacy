import { GatsbyNode } from "gatsby";
import path from "path";

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
  });
};

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions }) => {
  actions.createTypes(`
    type Site {
      siteMetadata: SiteMetadata!
    }
    
    type SiteMetadata {
      siteUrl: String!
    }

    type ContentfulAsset {
      gatsbyImage: GatsbyImageData!
    }

    type ContentfulContact {
      phone: String!
      email: String!
      address: String!
    }

    type ContentfulCourse {
      name: String!
      institution: String!
    }

    type ContentfulEducation {
      from: Date!
      title: String!
      institution: String!
    }

    type ContentfulFunFact {
      title: String!
      value: String!
    }  
    
    type ContentfulName {
      firstName: String!
      lastName: String!
    }

    type ContentfulOccupation {
      title: String!
    }

    type ContentfulPdf {
      title: String!
      file: ContentfulAsset!
      thumbnail: ContentfulAsset!
    }

    type ContentfulSelfIntroduction {
      content: contentfulSelfIntroductionContentTextNode!
    }

    type contentfulSelfIntroductionContentTextNode implements Node {
      content: String!
    }
    
    type ContentfulSkill { 
      name: String!
      type: String!
    }

    type ContentfulSocialMedia {
      name: String!
      link: String!
    }

    type ContentfulTestimonial {
      name: String!
      jobTitle: String!
      company: String!
      comment: contentfulTestimonialCommentTextNode!
    }

    type contentfulTestimonialCommentTextNode implements Node {
      comment: String!
    }

    type ContentfulWorkingExperience {
      from: Date!
      jobTitle: String!
      company: String!
    }
  `);
};

