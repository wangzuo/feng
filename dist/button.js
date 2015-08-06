'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var cx = require('classnames');

module.exports = React.createClass({
  displayName: 'Button',

  getDefaultProps: function getDefaultProps() {
    return {
      a: false,
      block: false,
      active: false,
      hover: false,
      disabled: false
    };
  },

  render: function render() {
    var color = this.props.color;
    var size = this.props.size;
    var block = this.props.block;
    var icon = this.props.icon;
    var active = this.props.active;
    var hover = this.props.hover;
    var disabled = this.props.disabled;
    var a = this.props.a;

    var cn = cx('u-btn', color ? 'u-btn-' + color : null, size ? 'u-btn-' + size : null, block ? 'u-btn-blk' : null, icon && this.props.children ? 'u-btn-icon' : null, active ? 'is-active' : null, hover ? 'is-hover' : null, disabled ? 'is-disabled' : null, icon, this.props.className);

    delete this.props.disabled;

    if (a) {
      return React.createElement(
        'a',
        _extends({}, this.props, { className: cn, role: 'button' }),
        this.props.children
      );
    }

    return React.createElement(
      'button',
      _extends({}, this.props, { className: cn, type: 'button' }),
      this.props.children
    );
  }
});