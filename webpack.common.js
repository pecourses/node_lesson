const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const pathToBundle = path.resolve(__dirname, "bundle");

module.exports = {
    entry: "./src/assets/js/index.js",
    output: {
        filename: "[contenthash].bundle.js",
        path: pathToBundle,
    },
    module: {
        rules: [
            {
                test: /\.(css|s[ac]ss)$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader'],
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader", // to transform new js into old js version
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf|otf)$/i,
                use: [
                    {
                        loader: 'file-loader',
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
};
