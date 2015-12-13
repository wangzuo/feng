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
    callback(null, template({
      html: ReactDOMServer.renderToString(<RoutingContext {...renderProps} />),
      assets: locals.assets
    }));
  });
};

