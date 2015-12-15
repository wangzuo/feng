var React = require('react');
var Simple = require('./forms-simple.example');
var ErrorField = require('./forms-error.example');
var Horizontal = require('./forms-horizontal.example');

module.exports = React.createClass({
  render() {
    return (
      <div>
        <h3>Simple form</h3>
        <Simple/>

        <h3>Error fields</h3>
        <ErrorField/>

        <h3>Horizontal</h3>
        <Horizontal/>
      </div>
    );
  }
});
