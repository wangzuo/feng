var React = require('react');

module.exports = React.createClass({
  displayName: 'Checkbox',

  render: function () {
    return (
      <span className="u-checkbox">
        <input type="checkbox"/>
        <span className="label">
          {this.props.children}
        </span>
      </span>
    );
  }
});