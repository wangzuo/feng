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
    return (
      <span className={cx('u-spinner', 'u-spinner-three-bounce', {
        'is-inverted': this.props.inverted
      }, this.props.className)}>
        <span className="bounce1"/>
        <span className="bounce2"/>
        <span className="bounce3"/>
      </span>
    );
  }
});