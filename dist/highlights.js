'use strict';

var React = require('react');
var Highlights = require('highlights');
var highlighter = new Highlights();

module.exports = React.createClass({
  displayName: 'Highlights',

  render: function render() {
    var html = highlighter.highlightSync({
      fileContents: this.props.children
    });

    return React.createElement('div', { dangerouslySetInnerHTML: { __html: html } });
  }
});