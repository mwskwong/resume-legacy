require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

const { CF_PAGES_BRANCH = "main", CONTENTFUL_ACCESS_TOKEN, ANALYZE_BUNDLE } = process.env;
const siteUrl = CF_PAGES_BRANCH === "main" || CF_PAGES_BRANCH === "master"
  ? "https://mwskwong.com"
  : `https://${CF_PAGES_BRANCH}.mwskwong.com`;

module.exports = {
  siteMetadata: {
    siteUrl
  },
  flags: {
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
    LMDB_STORE: true,
    PARALLEL_QUERY_RUNNING: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        spaceId: "zz9cwhc5t97i"
      }
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => CF_PAGES_BRANCH,
        env: {
          main: {
            policy: [{ userAgent: "*", allow: "/" }]
          },
          next: {
            policy: [{ userAgent: "*", disallow: "/" }]
          }
        }
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        background_color: "#ffffff",
        cache_busting_mode: "none",
        display: "standalone",
        icon: "src/images/icon.png",
        name: "Matthew",
        short_name: "Matthew",
        start_url: ".",
        theme_color: "#ffffff"
      }
    },
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: ["https://images.ctfassets.net"]
      }
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**icon-*"]
        }
      }
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: ["auto", "webp", "avif"],
          placeholder: "blurred"
        }
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/"
      },
      __key: "images"
    },
    // {
    //   resolve: "gatsby-plugin-loadable-components-ssr",
    //   options: {
    //     useHydrate: true
    //   }
    // },
    ...(
      ANALYZE_BUNDLE
        ? [
          "gatsby-plugin-webpack-bundle-analyser-v2",
          "gatsby-plugin-perf-budgets"
        ]
        : []
    )
  ]
};
