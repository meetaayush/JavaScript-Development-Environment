const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development",
      template: "./src/index.html"
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "views"),
    publicPath: "/"
  },
  module: {
    rules: [
      { test: "/.js$/", exclude: "/node_modules/", loader: "babel-loader" },
      {
        test: /.css$/,
        exclude: /node_modules/,
        loaders: ["style-loader", "css-loader"]
      }
    ]
  }
};
