var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

var paths = [
  '/'
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
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader!cssnext-loader' },
    ]
  },

  /*
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'babel-core/browser': 'babel'
  },
  */

  plugins: [
    new StaticSiteGeneratorPlugin('site.bundle.js', paths, {})
  ]
};

