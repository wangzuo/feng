'use strict';

var React = require('react');
var cx = require('classnames');

module.exports = React.createClass({
  displayName: 'Link',

  render: function render() {
    var href = this.props.href;

    if (process.env.PAGE) href = href + '.html';

    return React.createElement(
      'a',
      {
        href: href,
        target: this.props.target,
        className: cx('j-link', this.props.classNams) },
      this.props.children
    );
  }
});