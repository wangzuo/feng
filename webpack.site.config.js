var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

var paths = [
  '/',
  '/css',
  '/css/buttons'
];

module.exports = {
  entry: {
    site: './entry.js',
    styles: './styles.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.js$/, ignore: /node_modules/, loader: 'babel-loader' },
      { test: /\.example$/, loader: 'babel-loader!example-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
    ]
  },

  example: {
    'Spinner': '../../react/spinner',
    'ButtonGroup': '../../react/button-group',
    'Button': '../../react/button'
  },

  /*
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'babel-core/browser': 'babel'
  },
  */

  postcss: function() {
    return require('./processors');
  },

  plugins: [
    new StaticSiteGeneratorPlugin('site.bundle.js', paths, {})
  ]
};

