const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          parser: {
            dataUrlCondition: {
              maxSize: 0
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
