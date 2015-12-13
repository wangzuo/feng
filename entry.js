import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { createHistory, createMemoryHistory } from 'history';
import { Router, RoutingContext, match } from 'react-router';
import routes from './routes';
import template from './template';

if(typeof document !== 'undefined') {
  const history = createHistory();
  
  console.log('render');

  ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('app'));
}

export default (locals, callback) => {
  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    var html = ReactDOMServer.renderToString(<RoutingContext {...renderProps} />);
    callback(null, template(html));
  });
};

