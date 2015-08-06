'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'ButtonGroup',

  render: function render() {
    return React.createElement(
      'span',
      { className: 'u-btn-group' },
      this.props.children
    );
  }
});