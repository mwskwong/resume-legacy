const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPreset({
    name: "babel-preset-gatsby",
    options: {
      reactRuntime: "automatic",
      development: process.env.NODE_ENV === "development",
      reactImportSource: "@welldone-software/why-did-you-render"
    }
  });
};
