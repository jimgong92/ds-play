var webpack = require('webpack');
var path = require('path');

var config;
if (process.env.NODE_ENV === 'test') {
  config = {
    entry: './test',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'test.bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/
        }
      ]
    }
  }
}
else {
  config = {
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
          exclude: /node_modules/
        }
      ]
    }
  };
}

module.exports = config;