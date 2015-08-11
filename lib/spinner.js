'use strict';

var cx = require('classnames');
var React = require('react');

module.exports = React.createClass({
  displayName: 'spinner',

  getDefaultProps: function getDefaultProps() {
    return {
      inverted: false
    };
  },

  render: function render() {
    return React.createElement(
      'span',
      { className: cx('u-spinner', 'u-spinner-three-bounce', {
          'is-inverted': this.props.inverted
        }, this.props.className) },
      React.createElement('span', { className: 'u-bounce1' }),
      React.createElement('span', { className: 'u-bounce2' }),
      React.createElement('span', { className: 'u-bounce3' })
    );
  }
});