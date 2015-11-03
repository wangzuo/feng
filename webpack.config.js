var webpack = require('webpack');

module.exports = {
  entry: './client.js',
  output: {
    path: __dirname + '/builds',
    filename: 'index.js',
    publicPath: "/builds/",
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.css$/, loader: "style-loader!css-loader!postcss-loader"}
    ]
  },
  postcss: function() {
    return require('./processors');
  },
  externals: {
    'react': 'React',
    'babel-core/browser': 'babel'
  },
  devtool: "source-map"
};
