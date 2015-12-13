var React = require('react');
import { Route, IndexRoute } from 'react-router';
var App = require('./site/app');
var Index = require('./site/index');
var Buttons = require('./site/css/buttons');

var routes = (
  <Route path="/" component={App}>
    <Route path="/buttons" component={Buttons}/>
    <IndexRoute component={Index} />
  </Route>
);

module.exports = routes;
