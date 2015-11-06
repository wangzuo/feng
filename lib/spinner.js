var cx = require('classnames');
var React = require('react');

module.exports = React.createClass({
  displayName: 'spinner',

  getDefaultProps() {
    return {
      inverted: false
    };
  },

  render() {
    return React.createElement(
      'span',
      { className: cx('u-spinner', 'u-spinner-three-bounce', {
          'is-inverted': this.props.inverted
        }, this.props.className) },
      React.createElement('span', { className: 'bounce1' }),
      React.createElement('span', { className: 'bounce2' }),
      React.createElement('span', { className: 'bounce3' })
    );
  }
});