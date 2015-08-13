var webpack = require('webpack');
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true'))
});

module.exports = {
  entry: './site/index.js',
  output: {
    path: __dirname + '/builds',
    filename: 'index.js',
    publicPath: "/builds/",
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
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
