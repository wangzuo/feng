'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var _md5 = require('blueimp-md5');
var md5 = _md5.md5 || _md5;

module.exports = React.createClass({
  displayName: 'Gravatar',

  render: function render() {
    var email = this.props.email;
    var size = this.props.size;
    var hash = md5(email);

    return React.createElement('img', _extends({}, this.props, {
      src: 'http://www.gravatar.com/avatar/' + hash + '?s=' + size
    }));
  }
});