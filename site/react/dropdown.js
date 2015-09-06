var React = require('react');
var Example = require('../example');

module.exports = React.createClass({
  render() {
    return (
      <div>
        <Example>
{`<div className="example-dropdown">
    <Dropdown items={['dog', 'pig', 'moose']} open>
    <Button>More <i className="ion-chevron-down"></i></Button>
  </Dropdown>
</div>`}
        </Example>
      </div>
    );
  }
});