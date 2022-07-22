module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "react-app",
    "plugin:jsx-a11y/strict",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "jsx-a11y",
    "@typescript-eslint"
  ],
  "rules": {
    "react/jsx-uses-react": "error",
    "react/react-in-jsx-scope": "error",
    "comma-dangle": [
      "error",
      "never"
    ],
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    "linebreak-style": [
      "error",
      process.platform === "win32" ? "windows" : "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
