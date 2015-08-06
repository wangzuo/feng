var React = require('react');
var cx = require('classnames');
import {Link} from 'react-router';

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
        {items.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            target={item.target}>
            {item.text}
          </Link>
        ))}
      </nav>
    );
  }
});
