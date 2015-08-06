'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var md5 = require('blueimp-md5');

var Gravatar = React.createClass({
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

module.exports = React.createClass({
  displayName: 'Card',

  getDefaultProps: function getDefaultProps() {
    return {
      // todo: responsive image support
      link: '#'
    };
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'u-card' },
      React.createElement('div', { className: 'gradient' }),
      React.createElement('img', { className: 'img', src: this.props.image }),
      React.createElement(
        'div',
        { className: 'text' },
        React.createElement(
          'div',
          { className: 'title' },
          this.props.title
        ),
        React.createElement(
          'div',
          { className: 'leadtext' },
          this.props.leadtext
        ),
        React.createElement(
          'div',
          { className: 'info' },
          React.createElement(Gravatar, { className: 'avatar', email: this.props.authorEmail, size: 20 }),
          React.createElement(
            'span',
            { className: 'author' },
            this.props.authorName
          ),
          React.createElement(
            'span',
            { className: 'time' },
            '3 days ago'
          )
        )
      ),
      React.createElement(
        'span',
        { className: 'label' },
        this.props.label
      ),
      React.createElement('a', { className: 'link', href: this.props.link })
    );
  }
});