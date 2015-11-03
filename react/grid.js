var cx = require('classnames');
var blacklist = require('blacklist');
var React = require('react');

exports.Container = React.createClass({
  displayName: 'Container',

  render() {
    var props = blacklist(this.props, 'className', 'children');
    props.className = cx('g-c', this.props.className);

    return (
      <div {... props}>
        {this.props.children}
      </div>
    );
  }
});

exports.Row = React.createClass({
  displayName: 'Row',

  render() {
    return (
      <div {... this.props}
        className={cx('g-r', this.props.className)}>
        {this.props.children}
      </div>
    );
  }
});

exports.Column = React.createClass({
  displayName: 'Column',

  getDefaultProps() {
    return {
      d: 24,
      t: 24,
      m: 24
    }
  },

  render() {
    var cn = cx(
      `g-${this.props.d}`,
      `g-t-${this.props.t}`,
      `g-m-${this.props.m}`,
      this.props.className
    );

    return (
      <div {... this.props} className={cn}>
        {this.props.children}
      </div>
    );
  }
});
