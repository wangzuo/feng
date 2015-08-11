'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var cx = require('classnames');
var React = require('react');

module.exports = React.createClass({
  displayName: 'Form',

  getDefaultProps: function getDefaultProps() {
    return {
      horizontal: false
    };
  },

  render: function render() {
    return React.createElement(
      'form',
      _extends({}, this.props, { className: cx('u-form', this.props.className) }),
      this.props.children
    );
  }
});