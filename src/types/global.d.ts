// Define process.env
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "production" | "development"
      CF_PAGES: 1 | 0
      CF_PAGES_COMMIT_SHA: string
      CF_PAGES_BRANCH: string
      CF_PAGES_URL: string
      CONTENTFUL_ACCESS_TOKEN: string
      ANALYZE_BUNDLE: 1 | 0
    }
  }
}