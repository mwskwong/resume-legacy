export const onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: require.resolve("@emotion/babel-plugin")
  });
};