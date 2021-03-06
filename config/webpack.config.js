
var webpack = require('webpack');
var path = require('path');

var config = {

  devtool: 'cheap-module-source-map',
  performance: {
    hints: false
  },
  entry: {
    'js-ui-engine-ngx-wrapper.umd': './src/index.ts',
    'js-ui-engine-ngx-wrapper.umd.min': './src/index.ts'
  },
  output: {
    path: path.join(__dirname, '../bundles'),
    filename: '[name].js',
    library: 'js-ui-engine-ngx-wrapper',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [
          'strip-sourcemap-loader'
        ]
      },
      {
        test: /\.ts$/,
        loaders: [
          'string-replace-loader?search=component\.css&replace=component\.scss',
          'awesome-typescript-loader?configFileName=src/tsconfig.json&declaration=false'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts'],
    modules: [ '../src', path.join(__dirname, '../node_modules') ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ],
  externals: [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    'rxjs/Rx'
  ]
};

module.exports = config;