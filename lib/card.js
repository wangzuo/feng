'use strict';

var React = require('react');
var Gravatar = require('./gravatar.js');

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