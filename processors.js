
// postcss plugins for both webpack postcss-loader & gulp-postcss

var autoprefixer = require('autoprefixer');
var customProperties = require('postcss-custom-properties');
var mixins = require('postcss-mixins');
var calc = require('postcss-calc');
var nested = require('postcss-nested');
var customMedia = require('postcss-custom-media');
var cssfor = require('postcss-for');
var colorFunction = require('postcss-color-function');
var cssImport = require('postcss-import');

module.exports = [
  cssImport,
  cssfor,
  customMedia,
  mixins,
  customProperties,
  calc,
  colorFunction,
  nested,
  autoprefixer
];