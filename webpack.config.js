const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, 'production'),
    compress: true
  },

  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'production')
  },

  module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };