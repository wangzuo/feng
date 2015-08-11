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
        <span className="u-bounce1"/>
        <span className="u-bounce2"/>
        <span className="u-bounce3"/>
      </span>
    );
  }
});