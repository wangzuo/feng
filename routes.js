var React = require('react');
import { Route, IndexRoute } from 'react-router';
var App = require('./site/app');
var Index = require('./site/index');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
  </Route>
);

module.exports = routes;
