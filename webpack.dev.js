const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");

const pathToBundle = path.resolve(__dirname, "bundle");

module.exports = merge(common, {
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: pathToBundle,
        port: 9000, // open dev server on port 9000
        open: true, // open dev server on startup
    },
});