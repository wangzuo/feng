var React = require('react');
var Example = require('../example');

module.exports = React.createClass({
  render() {
    return (
      <Example>
      {`<div className="example-labels">
        <Label color="blue">1</Label>
        <Label color="green">2</Label>
        <Label color="yellow">3</Label>
        <Label color="red">4</Label>
      </div>`}
      </Example>
    );
  }
});
