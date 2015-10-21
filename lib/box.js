'use strict';

var cx = require('classnames');
var React = require('react');

module.exports = React.createClass({
  displayName: 'Box',

  getDefaultProps: function getDefaultProps() {
    return {
      center: false
    };
  },

  render: function render() {
    var cn = cx(this.props.className, 'u-box', this.props.center ? 'u-box-center' : null);

    return React.createElement(
      'div',
      { className: cn },
      this.props.children
    );
  }
});