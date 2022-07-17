/// <reference types="@welldone-software/why-did-you-render" />

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

  interface Component {
    muiName?: string
  }
}