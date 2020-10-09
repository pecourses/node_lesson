const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
          {
            test: /(\.css$|\.s[ac]ss)/,
            use: [MiniCssExtractPlugin.loader, "css-loader",'sass-loader'], 
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
            test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
            use: [
              'file-loader',
            ],
          },
        ],
      },
    plugins: [
        new MiniCssExtractPlugin({filename: "[name].css", }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ 
            template: "./src/index.html",
          }
          ), 
      ],
    output: {
      filename: "[contenthash].bundle.js",
      path: path.resolve(__dirname, 'bundle'),
    },
};