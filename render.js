GLOBAL.__DEV__ = false;
GLOBAL.__PAGE__ = false;

var fs = require('fs');
var path = require('path');
var async = require('async');
var mkdirp = require('mkdirp');
var sections = require('./site/pages');
var site = require('./site/index');

var dir = 'builds';

function html(str, page) {
  return `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <title>Feng</title>
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" type="text/css"/>
    <link rel="stylesheet" href="../../dist/feng.min.css" type="text/css"/>
    </head>
    <body>
    <div id="app">
  ${str}
  </div>

  <script>var __PAGE__ = true;</script>
  <script src="../babel-browser.min.js"></script>
  <script src="https://fb.me/react-0.13.3.js"></script>
  <script src="../app.js"></script>
  <script>

  React.render(React.createElement(App, {path: '${page}'}), document.getElementById('app'));

  </script>
    </body>
    </html>`;
}

function build(section, page, cb) {
  console.log('building', section, page);
  mkdirp(path.join(dir, section), function(err) {
    if(err) return cb(err);
    fs.writeFile(`builds${page}.html`, html(site(`${page}`), page), function(err) {
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
