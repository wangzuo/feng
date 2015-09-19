var React = require('react');
var cx = require('classnames');

module.exports = React.createClass({
  displayName: 'Link',

  render() {
    var href = this.props.href;
    var path = this.props.path;
    var target = this.props.target;

    return (
      <a href={`/feng-ui${href}`}
        data-href={path}
        target={target}
        className={cx('j-link', this.props.classNams)}>
        {this.props.children}
      </a>
    );
  }
});
