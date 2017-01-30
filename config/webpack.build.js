var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
/*
  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    port: 8080,
    proxy: {
      "http://localhost:8080/api/*": {
          target: 'http://localhost:3000',
          changeOrigin: true,
          pathRewrite: {'^http://localhost:8080' : ''}
        }
       }
    }
*/
  }
);
