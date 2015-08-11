var React = require('react');

module.exports = React.createClass({
  displayName: 'ButtonGroup',

  render() {
    return (
      <span className="u-btn-group">
      {this.props.children}
      </span>
    );
  }
});
