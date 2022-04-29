const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|webp|avif|woff2?)$/i,
          type: "asset",
          parser: {
            dataUrlCondition: {
              maxSize: 1
            }
          }
        }
      ]
    },
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
  });
};
