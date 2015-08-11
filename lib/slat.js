'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'Slat',

  render: function render() {
    return React.createElement(
      'div',
      { className: 'u-slat' },
      React.createElement('img', { className: 'img', src: this.props.image }),
      React.createElement(
        'div',
        { className: 'title' },
        this.props.title
      ),
      this.props.children
    );
  }
});