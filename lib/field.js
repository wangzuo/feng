var cx = require('classnames');
var React = require('react');

module.exports = React.createClass({
  displayName: 'Field',

  getDefaultProps() {
    return {
      label: '',
      horizontal: false
    }
  },

  render() {
    var horizontal = this.props.horizontal;

    return (
      <div className={cx('u-field', horizontal ? 'u-field-x' : null)}>
        <label className="label">{this.props.label}</label>
        {this.props.children}
      </div>
    );
  }
});
