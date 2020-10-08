const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
const pathToBundle = path.resolve(__dirname, "bundle");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: pathToBundle,
  },
});
