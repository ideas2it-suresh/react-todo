var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: ['./app/js/main.js', './app/scss/main.scss'],
  output: {
     path:'/',
     filename: './app/js/index.js',
  },
  devServer: {
     inline: true,
     port: 8080
  },
  module: {
     rules: [
        {
           test: /\.jsx?$/,
           exclude: /node_modules/,
           loader: 'babel-loader',
           query: {
              presets: ['es2015', 'react']
           }
        },
        { // sass / scss loader for webpack
          test: /\.(sass|scss)$/,
          loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
        }
     ]
  },
  plugins: [
   new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
   new ExtractTextPlugin({ // define where to save the file
     filename: './app/css/main.css',
     allChunks: true,
   }),
 ]
}
module.exports = config;
