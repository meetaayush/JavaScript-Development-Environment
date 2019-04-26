/* eslint-disable no-console */

import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import config from "../webpack.development.config";
import open from "open";

const app = express();
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

// Serve the files on port 5000.
const PORT = process.env.PORT || 5000;
app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running at port ${PORT}`);
    open(`http://localhost:${PORT}`);
  }
});
