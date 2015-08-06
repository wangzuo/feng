'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var cx = require('classnames');

module.exports = React.createClass({
  displayName: 'Label',

  render: function render() {
    var color = this.props.color;
    var cn = cx('u-label', color ? 'u-label-' + color : null, this.props.className);

    return React.createElement(
      'span',
      _extends({}, this.props, { className: cn }),
      this.props.children
    );
  }
});