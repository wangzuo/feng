var React = require('react');
var cx = require('classnames');
var Spinner = require('./spinner');

module.exports = React.createClass({
  displayName: 'Button',

  getDefaultProps() {
    return {
      a: false,
      block: false,
      active: false,
      hover: false,
      disabled: false,
      loading: false,
      type: 'button'
    };
  },

  renderSpinner() {
    if(!this.props.loading) return null;
    var color = this.props.color;
    return <Spinner className="spinner" inverted={['yellow', 'red', 'blue'].indexOf(color) >= 0}/>
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
    var loading = this.props.loading;

    var cn = cx(
      'u-btn',
      color ? `u-btn-${color}` : null,
      size ? `u-btn-${size}` : null,
      icon, {
        'u-btn-blk': block,
        'u-btn-icon': icon && this.props.children,
        'is-hover': hover,
        'is-active': active,
        'is-disabled': disabled,
        'is-loading': loading
      },
      this.props.className
    );

    delete this.props.disabled;

    if(a) {
      return (
        <a {... this.props} className={cn} role="button">
          {this.renderSpinner()}
          {this.props.children}
        </a>
      )
    }

    return (
      <button {... this.props} className={cn} type={this.props.type}>
        {this.renderSpinner()}
        {this.props.children}
      </button>
    );
  }
});
