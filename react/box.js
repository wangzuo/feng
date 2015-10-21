var cx = require('classnames');
var React = require('react');

module.exports = React.createClass({
  displayName: 'Box',

  render: function () {
    var cn = cx(this.props.className, 'u-box');
    return (
      <div className={cn}>
        {this.props.children}
      </div>
    );
  }
});