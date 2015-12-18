var cx = require('classnames');
var blacklist = require('blacklist');
var React = require('react');

module.exports = React.createClass({
  displayName: 'Form',

  getDefaultProps() {
    return {
      horizontal: false
    };
  },

  render() {
    var props = blacklist(this.props, 'className');
    props.className = cx('u-form', this.props.className);

    return <form {... props} />;
  }
});
