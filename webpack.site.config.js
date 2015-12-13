var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var data = require('./data');

module.exports = {
  entry: './entry.js',

  output: {
    filename: 'bundle.js',
    path: 'dist',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader!cssnext-loader' },
    ]
  },

  externals: {
    'react': 'React',
    'babel-core/browser': 'babel'
  },

  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, {})
  ]
};

