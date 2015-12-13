var cx = require('classnames');
var React = require('react');

module.exports = React.createClass({
  displayName: 'Dialog',

  getDefaultProps() {
    return {
      open: false
    };
  },

  render() {
    var cn = cx('u-dialog-wrap', {
      'is-open': this.props.open
    }, this.props.className);

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

  handleClickClose() {
    if (this.props.onClose) this.props.onClose();
  }
});