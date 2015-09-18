var React = require('react');
var Example = require('../example');

module.exports = React.createClass({
  render() {
    return (
      <Example html={false}>
{`<Markdown>
{\`### hello world\`}
</Markdown>`}
      </Example>
    );
  }
});
