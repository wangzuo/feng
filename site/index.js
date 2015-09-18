var React = require('react');
var Markdown = require('../react/markdown');

module.exports = React.createClass({
  render() {
    return (
      <div>
        <h1>feng-ui</h1>
        <Markdown>
        {`# hello world`}
        </Markdown>
      </div>
    );
  }
});
