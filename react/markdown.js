var React = require('react');
var MarkdownIt = require('markdown-it');

var md = new MarkdownIt();

module.exports = React.createClass({
  displayName: 'React',

  render() {
    var text = this.props.children;
    var html = md.render(text);

    return <div dangerouslySetInnerHTML={{__html: html}}/>;
  }
});