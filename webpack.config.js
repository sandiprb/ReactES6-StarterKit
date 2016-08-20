var webpack = require('webpack');
var path = require('path');
var ManifestPlugin = require('webpack-manifest-plugin');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');

var debug = process.env.NODE_ENV !== "production";

const APP_DIR = path.join(__dirname, './app');
const STATIC_DIR = path.join(__dirname, './app/static');
GLOBAL.window.manifest = '[name].[chunkhash].js';

module.exports = {
  context: __dirname,
  
  devtool: debug ? "inline-sourcemap" : null,
  
  entry: STATIC_DIR + "/js/index.jsx",

  output: {
    path: STATIC_DIR + "/build",
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },

  module:{
    loaders : [
    {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel'
    }
    ]
  },

  plugins: debug ? [
  new ManifestPlugin(),
  new ChunkManifestPlugin({
    filename: "chunk-manifest.json",
    manifestVariable: "webpackManifest"
  }),
  ] : [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
