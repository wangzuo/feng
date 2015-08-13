'use strict';

var cx = require('classnames');
var React = require('react');

module.exports = React.createClass({
  displayName: 'Dropdown',

  getDefaultProps: function getDefaultProps() {
    return {
      open: false,
      items: []
    };
  },

  render: function render() {
    var open = this.props.open;
    var items = this.props.items;
    var cn = cx('u-dropdown', {
      'is-open': open
    }, this.props.className);

    return React.createElement(
      'div',
      { className: cn },
      this.props.children,
      React.createElement(
        'ul',
        { className: 'items' },
        items.map(function (item, i) {
          return React.createElement(
            'li',
            { key: i, className: 'item' },
            item
          );
        })
      )
    );
  }
});