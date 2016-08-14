var webpack = require('webpack');
var path = require('path');

var debug = process.env.NODE_ENV !== "production";

const APP_DIR = path.join(__dirname, './app/js');
const BUILD_DIR = path.join(__dirname, './app/static/js');


module.exports = {
  context: __dirname,
  
  devtool: debug ? "inline-sourcemap" : null,
  
  entry: APP_DIR + "/index.jsx",

  output: {
    path: BUILD_DIR,
    filename: "app.js"
  },

  module:{
    loaders : [
    {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel',
    },

    ]
  },

  plugins: debug ? [] : [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
