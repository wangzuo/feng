import { Route, IndexRoute } from 'react-router';
var React = require('react');
var App = require('./site/app');
var Index = require('./site/index');
var Avatars = require('./site/css-avatars');
var Buttons = require('./site/css-buttons');
var Forms = require('./site/css-forms');
var Boxes = require('./site/css-boxes');
var Cards = require('./site/css-cards');

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Index}/>
    <Route path="/css" component={Buttons}/>
    <Route path="/css/buttons" component={Buttons}/>
    <Route path="/css/forms" component={Forms}/>
    <Route path="/css/avatars" component={Avatars}/>
    <Route path="/css/boxes" component={Boxes}/>
    <Route path="/css/cards" component={Cards}/>
  </Route>
);

module.exports = routes;
