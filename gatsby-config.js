require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

const {
  CF_PAGES_BRANCH = "main",
  CONTENTFUL_ACCESS_TOKEN,
  HA_PROXY_HOST,
  HA_PROXY_PORT,
  HA_PROXY_USER,
  HA_PROXY_PASSWORD
} = process.env;
const siteUrl = CF_PAGES_BRANCH === "main" || CF_PAGES_BRANCH === "master"
  ? "https://mwskwong.com"
  : `https://${CF_PAGES_BRANCH}.mwskwong.com`;

module.exports = {
  siteMetadata: {
    description: "Dynamic and motivated System DBA and Front-End Developer with vast IT experience. Skilled in maintaining databases, front-end development, analytical thinking and creative problem-solving. Adaptable and transformational team player with an ability to work independently and a willingness to go the extra mile.",
    shortTitle: "Matthew Kwong",
    siteUrl,
    themeColor: "#ffffff",
    title: "Matthew Kwong - System DBA & Front-End Developer"
  },
  flags: {
    FAST_DEV: true,
    PARALLEL_SOURCING: true
  },
  plugins: [
    // {
    //   resolve: "gatsby-source-contentful",
    //   options: {
    //     accessToken: CONTENTFUL_ACCESS_TOKEN,
    //     spaceId: "zz9cwhc5t97i",
    //     proxy: {
    //       host: HA_PROXY_HOST,
    //       port: HA_PROXY_PORT,
    //       auth: {
    //         username: HA_PROXY_USER,
    //         password: HA_PROXY_PASSWORD
    //       }
    //     }
    //   }
    // },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        background_color: "#ffffff",
        cache_busting_mode: "none",
        categories: ["resume", "personalization"],
        description: "Matthew's Personal Resume Website",
        display: "standalone",
        icon: "src/images/icon.png",
        lang: "en",
        name: "Matthew Kwong - System DBA & Front-End Developer",
        short_name: "Matthew Kwong",
        start_url: ".",
        theme_color: "#ffffff"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/"
      },
      __key: "images"
    }
  ]
};
