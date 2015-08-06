'use strict';

var cx = require('classnames');
var React = require('react');

module.exports = React.createClass({
  displayName: 'Field',

  getDefaultProps: function getDefaultProps() {
    return {
      label: '',
      horizontal: false
    };
  },

  render: function render() {
    var horizontal = this.props.horizontal;

    return React.createElement(
      'div',
      { className: cx('u-field', horizontal ? 'u-field-x' : null) },
      React.createElement(
        'label',
        { className: 'label' },
        this.props.label
      ),
      this.props.children
    );
  }
});