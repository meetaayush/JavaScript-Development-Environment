// This file isn't compiled. So must use commonJS and ES5

// Register babel to transpile before our test runs
require("babel-register")();

// disable webpack features that Mocha doesn't understand
require.extensions[".css"] = function() {};
