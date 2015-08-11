'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var cx = require('classnames');

exports.Container = React.createClass({
  displayName: 'Container',

  render: function render() {
    return React.createElement(
      'div',
      _extends({}, this.props, {
        className: cx('g-c', this.props.className) }),
      this.props.children
    );
  }
});

exports.Row = React.createClass({
  displayName: 'Row',

  render: function render() {
    return React.createElement(
      'div',
      _extends({}, this.props, {
        className: cx('g-r', this.props.className) }),
      this.props.children
    );
  }
});

exports.Column = React.createClass({
  displayName: 'Column',

  getDefaultProps: function getDefaultProps() {
    return {
      d: 1,
      t: 1,
      m: 1
    };
  },

  render: function render() {
    var cn = cx('g-' + this.props.d, 't-' + this.props.t, 'm-' + this.props.m, this.props.className);

    return React.createElement(
      'div',
      _extends({}, this.props, { className: cn }),
      this.props.children
    );
  }
});