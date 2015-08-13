var React = require('react');
var cx = require('classnames');

module.exports = React.createClass({
  displayName: 'Link',

  render() {
    var href = this.props.href;

    return (
      <a
        href={`/feng-ui${href}.html`}
        target={this.props.target}
        className={cx('j-link', this.props.classNams)}>
        {this.props.children}
      </a>
    );
  }
});