var React = require('react');
var MarkdownIt = require('markdown-it');

var md = new MarkdownIt();

module.exports = React.createClass({
  displayName: 'Markdown',

  render() {
    var text = this.props.children;
    var html = md.render(text);

    return React.createElement('div', {
      className: this.props.className,
      dangerouslySetInnerHTML: { __html: html }
    });
  }
});