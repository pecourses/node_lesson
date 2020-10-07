const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

const pathToBundle = path.resolve(__dirname, "bundle");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "[contenthash].bundle.js",
    path: pathToBundle,
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[contenthash].img.[ext]",
              outputPath: "static/images",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              // mozjpeg: {
              //   progressive: true,
              //   quality: 65
              // },
              // optipng: {
              //   enabled: false,
              // },
              // pngquant: {
              //   quality: '65-90',
              //   speed: 4
              // },
              // gifsicle: {
              //   interlaced: false,
              // },
              // svgo: {
              //   enabled: false,
              // }
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[contenthash].font.[ext]",
              outputPath: "static/fonts",
            },
          },
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

  devServer: {
    contentBase: pathToBundle,
    port: 9000,
    open: true,
  },

  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
};
