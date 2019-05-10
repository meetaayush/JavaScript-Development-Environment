/* eslint-disable no-console */

import express from "express";
import open from "open";
import path from "path";
import compression from 'compression';

const app = express();

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.

// Enable compression
app.compression(compression());

app.use(express.static('dist'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
})

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
