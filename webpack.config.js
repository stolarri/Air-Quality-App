const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
<<<<<<< HEAD

=======
const webpack = require('webpack');
>>>>>>> proper Node config for browser and ES6 style import in provider
module.exports = {
  //optimization: {
  //      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  //    },  
  entry: { 
  main: [
  'babel-polyfill',
  './src/AirDataProvider.js',
  './src/index.js'
  ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
<<<<<<< HEAD
  target: 'node',
=======
  
>>>>>>> proper Node config for browser and ES6 style import in provider
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(ttf|eot|svg|png|jpg|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: './src/index.html',
        filename: 'index.html'
      }),
	new webpack.ProvidePlugin({
      _: 'lodash'
    })
  ]
};