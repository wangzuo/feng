'use strict';

var cx = require('classnames');
var React = require('react');
var Button = require('./button');

module.exports = React.createClass({
  displayName: 'Dropdown',

  getDefaultProps: function getDefaultProps() {
    return {
      items: ['dog', 'pig', 'moose']
    };
  },

  getInitialState: function getInitialState() {
    return {
      open: true
    };
  },

  render: function render() {
    var open = this.state.open;
    var items = this.props.items;
    var cn = cx('u-dropdown', {
      'is-open': open
    }, this.props.className);

    return React.createElement(
      'div',
      { className: cn },
      React.createElement(
        Button,
        { onClick: this.handleClick },
        'More ',
        React.createElement('i', { className: 'ion-chevron-down' })
      ),
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
  },

  handleClick: function handleClick(e) {
    this.setState({
      open: !this.state.open
    });
  }
});