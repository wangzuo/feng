'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'Checkbox',

  render: function render() {
    return React.createElement(
      'span',
      { className: 'u-checkbox' },
      React.createElement('input', { type: 'checkbox' }),
      React.createElement(
        'span',
        { className: 'label' },
        this.props.children
      )
    );
  }
});