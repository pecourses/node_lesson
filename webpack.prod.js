const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
    splitChunks: {
        chunks: "all", // to split code on chunks(куски)
    },
    minimize: true,
    minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin(), // minimize js
    ],
},
});