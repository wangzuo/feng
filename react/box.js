var cx = require('classnames');
var React = require('react');

module.exports = React.createClass({
  displayName: 'Box',

  getDefaultProps() {
    return {
      center: false
    };
  },

  renderTitle() {
    if(!this.props.title) return null;

    return <div className="u-box-title"><h3>{this.props.title}</h3></div>;
  },

  render() {
    var cn = cx(
      this.props.className,
      'u-box',
      this.props.center ? 'u-box-center' : null
    );

    return (
      <div className={cn}>
        {this.renderTitle()}
        <div className="u-box-inner">
          {this.props.children}
        </div>
      </div>
    );
  }
});