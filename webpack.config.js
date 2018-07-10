const path = require('path');
const webpack = require('webpack');
// const webpack = require('webpack-dev-server');


module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, './client/build'),
    filename: 'webpack-bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "./client/build"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        use: [
          {loader: "style-loader" }, 
          {loader: "css-loader"}
        ]
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: "file-loader",
      }
    ]
  }
};