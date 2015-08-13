var fs = require('fs');
var path = require('path');
var async = require('async');
var mkdirp = require('mkdirp');
var React = require('react');
var sections = require('./site/pages');
var App = require('./site/app');

function site(path) {
  return React.renderToString(<App path={path}/>);
};

var dir = '_site';

function html(str, page) {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <title>Feng</title>
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" type="text/css"/>
    <link rel="stylesheet" href="/feng.min.css" type="text/css"/>
    <link rel="stylesheet" type="text/css" href="/vendors/prism.css">
    <script src="/vendors/prism.js" data-manual></script>
    </head>
    <body>
    <div id="app">${str}</div>

  <script src="/vendors/babel-browser.min.js"></script>
  <script src="https://fb.me/react-0.13.3.js"></script>
  <script src="/app.js"></script>
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
    fs.writeFile(`${dir}${page}.html`, html(site(`${page}`), page), function(err) {
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
