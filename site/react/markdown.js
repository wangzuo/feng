var React = require('react');
var Example = require('../example');
var Layout = require('../layout');

module.exports = React.createClass({
  render() {
    return (
      <Layout>
        <Example html={false}>
{`<Markdown>
  {\`### hello world\`}
</Markdown>`}
        </Example>
      </Layout>
    );
  }
});
