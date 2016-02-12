var React = require('react');
var MarkdownIt = require('markdown-it');

var md = new MarkdownIt();

module.exports = (props) => {
  var text = props.children;
  var html = md.render(text);

  return (
    <div
      className={props.className}
      dangerouslySetInnerHTML={{__html: html}}
    />
  );
};
