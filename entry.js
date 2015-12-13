import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { createHistory, createMemoryHistory } from 'history';
import { Router, RoutingContext, match } from 'react-router';

import routes from './routes';

if(typeof document !== 'undefined') {
  const history = createHistory();
  const outlet = document.getElementById('outlet');

  ReactDOM.render(<Router history={history} routes={routes} />, outlet);
}

export default (locals, callback) => {
  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    var html = ReactDOMServer.renderToString(<RoutingContext {...renderProps} />);
    callback(null,  html);

    callback(null, 
`<!DOCTYPE html>
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
    <div id="app">${html}</div>

  <script src="https://fb.me/react-0.13.3.js"></script>
  <script src="/feng-ui/vendors/prism.js" data-manual></script>
  <script src="/feng-ui/vendors/babel-browser.min.js"></script>
  <script src="/feng-ui/app.js"></script>
  </body>
</html>`);


  });
};

