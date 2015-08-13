var React = require('react');
var cx = require('classnames');

module.exports = React.createClass({
  displayName: 'Link',

  render() {
    var href = this.props.href;

    // if(!__DEV__) href = href + '.html';

    return (
      <a
        href={`${href}.html`}
        target={this.props.target}
        className={cx('j-link', this.props.classNams)}>
        {this.props.children}
      </a>
    );
  }
});