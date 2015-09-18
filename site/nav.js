var cx = require('classnames');
var React = require('react');
var Link = require('./link');

module.exports = React.createClass({
  displayName: 'Nav',

  getDefaultProps() {
    return {
      section: null,
      pages: []
    };
  },

  render() {
    var section = this.props.section;
    var pages = this.props.pages;

    return (
      <nav className={cx('u-nav', this.props.className)}>
        <a href="javascript:void(0)" className="title">{section.text}</a>
        {pages.map((page, i) => (
          <Link
            key={i}
            href={`/${section.path}/${page.path}`}
            target={page.target}>
            {page.text}
          </Link>
        ))}
      </nav>
    );
  }
});
