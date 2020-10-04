const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

const pathToBundle = path.resolve(__dirname, "bundle");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[contenthash].bundle.js",
    path: pathToBundle,
  },
  module: {
    rules: [
      {
        test: /(\.css$|\.s[ac]ss)/,
        use: [MiniCssExtractPlugin.loader, "css-loader",'sass-loader'], // to extract css into the separate files
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // to transform new js into old js version
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }), // to extract styles into the separate file
    new CleanWebpackPlugin(), // to clean the bundle folder on rebuild
    new webpack.ProgressPlugin(), // show build progress
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }), // to insert html into the build
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: pathToBundle,
    port: 9000, // open dev server on port 9000
    open: true, // open dev server on startup
  },
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
};
