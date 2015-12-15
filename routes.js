var React = require('react');
import { Route, IndexRoute } from 'react-router';
var App = require('./site/app');
var Index = require('./site/index');
var Buttons = require('./site/css/buttons');
var Forms = require('./site/css/forms');
var Avatars = require('./site/css/avatars');

var routes = (
  <Route path="/" component={App}>
    <Route path="/css/avatars" component={Avatars}/>
    <Route path="/css/buttons" component={Buttons}/>
    <Route path="/css/forms" component={Forms}/>
    <IndexRoute component={Index} />
  </Route>
);

module.exports = routes;
