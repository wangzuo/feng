var cx = require('classnames');
var React = require('react');

module.exports = React.createClass({
  displayName: 'Box',

  getDefaultProps() {
    return {
      center: false
    };
  },

  renderTitle() {
    if (!this.props.title) return null;

    return React.createElement(
      'div',
      { className: 'u-box-title' },
      React.createElement(
        'h3',
        null,
        this.props.title
      )
    );
  },

  render() {
    var cn = cx(this.props.className, 'u-box', this.props.center ? 'u-box-center' : null);

    return React.createElement(
      'div',
      { className: cn },
      this.renderTitle(),
      React.createElement(
        'div',
        { className: 'u-box-inner' },
        this.props.children
      )
    );
  }
});