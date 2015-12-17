var React = require('react');
import { Route, IndexRoute } from 'react-router';
import App from './site/app';
import Index from './site/index';
import Avatars from './site/css/avatars';
import Buttons from './site/css/buttons';
import Forms from './site/css/forms';

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="/css/avatars" component={Avatars} />
    <Route path="/css/forms" component={Forms} />
    <Route path="/css/buttons" component={Buttons} />
  </Route>
);

module.exports = routes;
