'use strict';

var React = require('react');
var MarkdownIt = require('markdown-it');

var md = new MarkdownIt();

module.exports = React.createClass({
  displayName: 'Markdown',

  render: function render() {
    var text = this.props.children;
    var html = md.render(text);

    return React.createElement('div', { dangerouslySetInnerHTML: { __html: html } });
  }
});