/// <reference types="@welldone-software/why-did-you-render" />
// eslint-disable-next-line react/no-typos
import "react";

// Add extra fields supported by MUI
declare module "react" {
  interface FunctionComponent {
    muiName?: string
  }

  interface VoidFunctionComponent {
    muiName?: string
  }

  interface ExoticComponent {
    muiName?: string
  }

  interface Component {
    muiName?: string
  }
}

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