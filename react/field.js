var cx = require('classnames');
var blacklist = require('blacklist');
var React = require('react');

module.exports = React.createClass({
  displayName: 'Field',

  getDefaultProps() {
    return {
      d: null,
      t: null,
      m: null,
      label: ''
    }
  },

  renderError() {
    if(!this.props.error) return null;

    return <span className="error">{this.props.error}</span>;
  },

  renderLabel() {
    var cn = cx('label', this.props.d ? `g-${this.props.d}` : null);

    if(!this.props.label) {
      return (
        <label className={cn}>&nbsp;</label>
      );
    }

    return (
      <label className={cn}>
        {this.props.label}
      </label>
    );
  },

  render() {
    var props = blacklist(this.props, 'label', 'error', 'children', 'd', 't', 'm');
    props.className = cx('u-field', {
      'g-row': this.props.d,
      'u-field-row': this.props.d,
      'u-field-err': this.props.error
    });

    return (
      <div {... props}>
        {this.renderLabel()}
        {this.props.d ? (
          <div className={`g-${24 - this.props.d}`}>
            {this.props.children}
          </div>
        ) : this.props.children}
        {this.renderError()}
      </div>
    );
  }
});
