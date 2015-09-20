var fs = require('fs');
var async = require('async');
var mkdirp = require('mkdirp');
var React = require('react');

var App = require('./site/app');
var sitemap = require('./site/map');
var pages = require('./pages')(sitemap);

var fns = pages.map((page) => {
  return build.bind(null, page.dir, page.path, page.html, page.component)
});

function build(dir, path, filePath, component, cb) {
  mkdirp('feng-ui/' + dir, function(err) {
    if(err) return cb(err);

    console.log(dir, path, filePath);

    fs.writeFile(`feng-ui${filePath}`, html(site(path), path), function(err) {
      if(err) return cb(err);

      console.log('output to', filePath);

      if(cb) cb();
    });
  });
}

function site(path) {
  return React.renderToString(<App path={path}/>);
};

// todo: sharing html templates ?
function html(str, page) {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <title>Feng UI</title>
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" type="text/css"/>
    <link rel="stylesheet" type="text/css" href="/feng-ui/vendors/prism.css">
    <link rel="stylesheet" href="/feng-ui/feng.min.css" type="text/css"/>
    <link rel="stylesheet" href="/feng-ui/example.css" type="text/css"/>
  </head>
  <body>
    <div id="app">${str}</div>

  <script src="https://fb.me/react-0.13.3.js"></script>
  <script src="/feng-ui/vendors/prism.js" data-manual></script>
  <script src="/feng-ui/vendors/babel-browser.min.js"></script>
  <script src="/feng-ui/app.js"></script>
  <script>
    React.render(React.createElement(App, {path: '${page}'}), document.getElementById('app'));
  </script>
  </body>
</html>`;
}

async.parallel(fns, (err, results) =>  {
  if(err) throw err;
});
