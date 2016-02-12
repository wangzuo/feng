import cx from 'classnames';
import blacklist from 'blacklist';
import React from 'react';
var Spinner = require('./spinner');

class Button extends React.Component {
  renderSpinner() {
    if(!this.props.loading) return null;
    var color = this.props.color;
    var inverted = ['yellow', 'red', 'blue'].indexOf(color) >= 0;

    return <Spinner className="spinner" inverted={inverted}/>;
  }

  render() {
    // todo: es6 assign
    var { color, size, block, icon, active, hover, disabled, loading, href, type } = this.props;
    var props = blacklist(this.props,
      'children', 'color', 'size', 'block', 'type',
      'icon', 'active', 'hover', 'disabled', 'loading');

    props.className = cx(
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

    if(href) {
      return (
        <a role="button" {... props}>
          {this.renderSpinner()}
          {this.props.children}
        </a>
      )
    }

    return (
      <button {... props} type={this.props.type}>
        {this.renderSpinner()}
        {this.props.children}
      </button>
    );
  }
}

Button.defaultProps = {
  block: false,
  active: false,
  hover: false,
  disabled: false,
  loading: false,
  type: 'button'
};

module.exports = Button;
