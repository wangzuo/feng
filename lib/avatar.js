'use strict';

var cx = require('classnames');
var React = require('react');
var _md5 = require('blueimp-md5');
var md5 = _md5.md5 || _md5;

module.exports = React.createClass({
  displayName: 'Avatar',

  getDefaultProps: function getDefaultProps() {
    return {
      round: false,
      circle: false,
      src: null
    };
  },

  getStyle: function getStyle() {
    var name = this.props.name;
    var style = {};

    if (name && name.length) {
      var hex = backgroundColor(name);
      style = {
        backgroundColor: '#' + hex,
        color: fontColor(hex)
      };
    }

    return style;
  },

  renderInner: function renderInner() {
    var name = this.props.name;
    var email = this.props.email;
    var src = this.props.src;

    if (name && name.length) return name[0];
    if (email) {
      var hash = md5(email);
      var size = 40;
      if (this.props.size === 'lg') size = 80;
      return React.createElement('img', { src: 'http://www.gravatar.com/avatar/' + hash + '?s=' + size });
    }

    if (src) return React.createElement('img', { src: src });
  },

  render: function render() {
    var name = this.props.name;
    var round = this.props.round;
    var circle = this.props.circle;
    var size = this.props.size;
    var style = this.getStyle();

    var cn = cx('u-avatar', size ? 'u-avatar-' + size : null, {
      'is-round': round,
      'is-circle': circle
    });

    return React.createElement(
      'div',
      { className: cn, style: style },
      this.renderInner()
    );
  }
});

function backgroundColor(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return (hash + '').substr(0, 6);
}

function fontColor(hex) {
  var r = parseInt(hex.substr(0, 2), 16);
  var g = parseInt(hex.substr(2, 2), 16);
  var b = parseInt(hex.substr(4, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;

  return yiq >= 128 ? 'black' : 'white';
}