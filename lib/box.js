'use strict';

var cx = require('classnames');
var React = require('react');

module.exports = React.createClass({
  displayName: 'Box',

  render: function render() {
    var cn = cx(this.props.className, 'u-box');
    return React.createElement(
      'div',
      { className: cn },
      this.props.children
    );
  }
});