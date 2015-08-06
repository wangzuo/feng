var React = require('react');
var cx = require('classnames');

module.exports = React.createClass({
  displayName: 'Button',

  getDefaultProps() {
    return {
      a: false,
      block: false,
      active: false,
      hover: false,
      disabled: false
    };
  },

  render() {
    var color = this.props.color;
    var size = this.props.size;
    var block = this.props.block;
    var icon = this.props.icon;
    var active = this.props.active;
    var hover = this.props.hover;
    var disabled = this.props.disabled;
    var a = this.props.a;

    var cn = cx(
      'u-btn',
      color ? `u-btn-${color}` : null,
      size ? `u-btn-${size}` : null,
      block ? 'u-btn-blk' : null,
      (icon && this.props.children) ? 'u-btn-icon' : null,
      active ? 'is-active' : null,
      hover ? 'is-hover' : null,
      disabled ? 'is-disabled' : null,
      icon,
      this.props.className
    );

    delete this.props.disabled;

    if(a) {
      return (
        <a {... this.props} className={cn} role="button">
          {this.props.children}
        </a>
      )
    }

    return (
      <button {... this.props} className={cn} type="button">
        {this.props.children}
      </button>
    );
  }
});
