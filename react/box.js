var cx = require('classnames');
var React = require('react');

module.exports = React.createClass({
  displayName: 'Box',

  getDefaultProps() {
    return {
      center: false
    };
  },

  render() {
    var cn = cx(
      this.props.className,
      'u-box',
      this.props.center ? 'u-box-center' : null
    );

    return (
      <div className={cn}>
        {this.props.children}
      </div>
    );
  }
});