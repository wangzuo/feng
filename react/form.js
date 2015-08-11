var cx = require('classnames');
var React = require('react');

module.exports = React.createClass({
  displayName: 'Form',

  getDefaultProps() {
    return {
      horizontal: false
    }
  },

  render() {
    return (
      <form {... this.props} className={cx('u-form', this.props.className)}>
      {this.props.children}
      </form>
    );
  }
});
