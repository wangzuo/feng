'use strict';

var cx = require('classnames');
var React = require('react');

module.exports = React.createClass({
  displayName: 'Dialog',

  getDefaultProps: function getDefaultProps() {
    return {
      open: false
    };
  },

  render: function render() {
    var cn = cx('u-dialog-wrap', {
      'is-open': this.props.open
    });

    return React.createElement(
      'div',
      { className: cn },
      React.createElement('div', { className: 'u-dialog-bg' }),
      React.createElement(
        'div',
        { className: 'u-dialog' },
        React.createElement(
          'div',
          { className: 'content' },
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
          React.createElement(
            'span',
            { onClick: this.handleClickClose },
            'x'
          )
        )
      )
    );
  },

  handleClickClose: function handleClickClose() {
    if (this.props.onClose) this.props.onClose();
  }
});