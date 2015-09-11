var React = require('react');
var Example = require('../example');

module.exports = React.createClass({
  render() {
    return (
      <div>
        <Example>
{`<div className="example-dropdown">
  <Dropdown/>
</div>`}
        </Example>
      </div>
    );
  }
});