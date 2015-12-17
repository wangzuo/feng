var React = require('react');
import { Route, IndexRoute } from 'react-router';
import App from './site/app';
// var Index = require('./site/index');
import Buttons from './site/css/buttons';
// var Forms = require('./site/css/forms');
// var Avatars = require('./site/css/avatars');

var routes = (
  <Route path="/" component={App}>
    <Route path="/css/buttons" component={Buttons}/>
  </Route>
);

module.exports = routes;
