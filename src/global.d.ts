/// <reference types="@welldone-software/why-did-you-render" />

// CSS Module import
declare module "*.module.css";

// Add extra fields supported by MUI
declare namespace React {
  interface FunctionComponent {
    muiName?: string
  }

  interface VoidFunctionComponent {
    muiName?: string
  }

  interface ExoticComponent {
    muiName?: string
  }

  namespace Component {
    const muiName: string;
  }
}