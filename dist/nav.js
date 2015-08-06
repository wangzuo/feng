'use strict';

var _reactRouter = require('react-router');

var React = require('react');
var cx = require('classnames');

module.exports = React.createClass({
  displayName: 'Nav',

  getDefaultProps: function getDefaultProps() {
    return {
      items: []
    };
  },

  render: function render() {
    var items = this.props.items;

    return React.createElement(
      'nav',
      { className: cx('u-nav', this.props.className) },
      items.map(function (item, i) {
        return React.createElement(
          _reactRouter.Link,
          {
            key: i,
            to: item.path,
            target: item.target },
          item.text
        );
      })
    );
  }
});