var fs = require('fs');
var async = require('async');
var mkdirp = require('mkdirp');
var concat = require('through2-concat');
var path = require('path');
var sections= require('./site/pages');
var site = require('./site/index');

var dir = 'builds';

function html(str) {
  return `<!DOCTYPE html>
  <html>
  <head>
    <title></title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <title>Feng</title>
    <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" type="text/css"/>
    <link rel="stylesheet" href="../feng.css" type="text/css"/>
    </head>
    <body>
  ${str}
    </body>
    </html>`;
}

function build(section, page, cb) {
  console.log('building', section, page);
  mkdirp(path.join(dir, section), function(err) {
    if(err) return cb(err);
    fs.writeFile(`builds${page}.html`, html(site(`${page}`)), function(err) {
      if(err) return cb(err);
      console.log('done', section, page);
      if(cb) cb();
    });
 });
}

var fns = [];
sections.map((section) => {
  section.pages.map((page) => {
    fns.push(build.bind(null, section.path, page.path));
  });
});

//module.exports = function(cb) {
  async.parallel(fns, (err, results) =>  {
    console.log('done');
  });
// }
