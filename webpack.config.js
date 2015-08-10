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
      {test: /\.css$/, loader: "style-loader!css-loader!postcss-loader"},
      {test: /\.less$/, loader: "style-loader!css-loader!less-loader"}
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
