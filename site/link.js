var React = require('react');
var cx = require('classnames');

module.exports = React.createClass({
  displayName: 'Link',

  render() {
    var href = this.props.href;
    if(href[0] !== '/') href = '/' + href;

    return (
      <a href={`/feng-ui${href}.html`}
        data-href={href}
        target={this.props.target}
        className={cx('j-link', this.props.classNams)}>
        {this.props.children}
      </a>
    );
  }
});
