var React = require('react');

module.exports = React.createClass({
  displayName: 'Checkbox',

  render: function () {
    return React.createElement(
      'span',
      { className: 'u-checkbox' },
      React.createElement('input', { type: 'checkbox' }),
      React.createElement(
        'span',
        { className: 'label' },
        this.props.children
      )
    );
  }
});