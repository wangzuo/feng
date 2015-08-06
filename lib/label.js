var React = require('react');
var cx = require('classnames');

module.exports = React.createClass({
  displayName: 'Label',

  render() {
    var color = this.props.color;
    var cn = cx(
      'u-label',
      color ? `u-label-${color}` : null,
      this.props.className
    );

    return (
      <span {... this.props} className={cn}>
        {this.props.children}
      </span>
    );
  }
});
