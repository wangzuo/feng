var cx = require('classnames');
var React = require('react');
var Link = require('./link');

module.exports = React.createClass({
  displayName: 'Nav',

  getDefaultProps() {
    return {
      title: null,
      items: []
    };
  },

  render() {
    return (
      <nav className={cx('u-nav', this.props.className)}>
        <a href="javascript:void(0)" className="title">{this.props.title}</a>
        {this.props.items.map((item, i) => (
          <Link
            key={i}
            href={item.html}
            path={item.path}>
            {item.text}
          </Link>
        ))}
      </nav>
    );
  }
});
