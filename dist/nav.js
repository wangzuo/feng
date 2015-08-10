'use strict';

var cx = require('classnames');
var React = require('react');
var Link = require('./link');

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
          Link,
          {
            key: i,
            href: item.path,
            target: item.target },
          item.text
        );
      })
    );
  }
});