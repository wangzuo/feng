var React = require('react');
var Simple = require('../examples/forms/simple.example');
var ErrorField = require('../examples/forms/error.example');
var Horizontal = require('../examples/forms/horizontal.example');

module.exports = () => (
  <div>
    <h3>Simple form</h3>
    <Simple/>

    <h3>Error fields</h3>
    <ErrorField/>

    <h3>Horizontal</h3>
    <Horizontal/>
  </div>
);
