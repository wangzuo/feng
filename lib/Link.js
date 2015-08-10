var cx = require('classnames');

module.exports = React.createClass({
  displayName: 'Link',

  render() {
    return (
      <a
        href={this.props.href}
        target={this.props.target}
        className={cx('j-link', this.props.classNams)}>
        {this.props.children}
      </a>
    );
  }
});