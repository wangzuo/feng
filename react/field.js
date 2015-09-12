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

  renderLabel() {
    if(!this.props.label) return null;

    return (
      <label className="label">{this.props.label}</label>
    );
  },

  render() {
    var horizontal = this.props.horizontal;

    return (
      <div className={cx('u-field', horizontal ? 'u-field-x' : null)}>
        {this.renderLabel()}
        {this.props.children}
      </div>
    );
  }
});