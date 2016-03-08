var webpack = require('webpack');
var path = require('path');

var config = {
  entry: './index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: { presets: [ 'es2015' ] },
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;