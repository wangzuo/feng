var cx = require('classnames');
var React = require('react');
var Link = require('./link');

module.exports = React.createClass({
  displayName: 'Nav',

  getDefaultProps() {
    return {
      items: []
    };
  },

  render() {
    var items = this.props.items;

    return (
      <nav className={cx('u-nav', this.props.className)}>
        <a href="javascript:void(0)" className="title">{this.props.title}</a>
        {items.map((item, i) => (
          <Link
            key={i}
            href={item.path}
            target={item.target}>
            {item.text}
          </Link>
        ))}
      </nav>
    );
  }
});
