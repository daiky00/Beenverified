var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('css/main.css');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {

  root: [
    path.join(__dirname, "src/scss/main.scss"),
    path.join(__dirname, "src/js/main.js")
  ]

  },
  output: {
    path: __dirname + '/dist',
    filename: 'js/bundle.js'
  },
  module: {
    loaders: [
      //JAVASCRIPT
     {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: ['babel-loader'],
       query: {
        presets: ['es2015']
      },
     },
     //Bootstrap and jQuery
     { test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
       loader: 'imports?jQuery=jquery'
     },
     //SCSS
      {
        test: /\.scss$/i,
        loader: extractCSS.extract(['css?sourceMap','sass?sourceMap'])
      },
      //Assets
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url'
      }
    ]
  },
  plugins: [
    extractCSS
  ]
};
