'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var cx = require('classnames');
var React = require('react');

exports.Tabs = React.createClass({
  displayName: 'Tabs',

  getDefaultProps: function getDefaultProps() {
    return {
      fixed: false
    };
  },

  render: function render() {
    var cn = cx('u-tabs', { 'u-tabs-fixed': this.props.fixed }, this.props.className);

    return React.createElement(
      'div',
      _extends({}, this.props, { className: cn }),
      this.props.children
    );
  }
});

exports.Nav = React.createClass({
  displayName: 'TabsNav',

  render: function render() {
    return React.createElement(
      'div',
      _extends({}, this.props, { className: 'tabs-nav' }),
      this.props.children
    );
  }
});

exports.Tab = React.createClass({
  displayName: 'TabsTab',

  render: function render() {
    var cn = cx('tab', { 'is-active': this.props.active }, this.props.className);

    return React.createElement(
      'div',
      _extends({}, this.props, { className: cn }),
      this.props.children
    );
  }
});

exports.Contents = React.createClass({
  displayName: 'TabsContents',

  render: function render() {
    return React.createElement(
      'div',
      _extends({}, this.props, { className: 'tabs-contents' }),
      this.props.children
    );
  }
});

exports.Content = React.createClass({
  displayName: 'TabsContent',

  render: function render() {
    var cn = cx('tabs-content', { 'is-active': this.props.active }, this.props.className);

    return React.createElement(
      'div',
      _extends({}, this.props, { className: cn }),
      this.props.children
    );
  }
});