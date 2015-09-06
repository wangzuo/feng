'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'Dialog',

  render: function render() {
    return React.createElement(
      'div',
      { className: 'u-dialog-wrap' },
      React.createElement('div', { className: 'u-dialog-bg' }),
      React.createElement(
        'div',
        { className: 'u-dialog' },
        React.createElement(
          'div',
          { className: 'content' },
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
        )
      )
    );
  }
});