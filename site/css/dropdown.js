var React = require('react');
var Example = require('../example');

module.exports = React.createClass({
  render() {
    return (
      <div>
        <Example>
{`<Dropdown items={['dog', 'pig', 'moose']} open>
  <Button>More</Button>
</Dropdown>`}
        </Example>
      </div>
    );
  }
});