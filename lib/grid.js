var React = require('react');
var cx = require('classnames');

exports.Container = React.createClass({
  displayName: 'Container',

  render() {
    return (
      <div {... this.props}
        className={cx('g-c', this.props.className)}>
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
      d: 1,
      t: 1,
      m: 1
    }
  },

  render() {
    var cn = cx(
      `g-${this.props.d}`,
      `t-${this.props.t}`,
      `m-${this.props.m}`,
      this.props.className
    );

    return (
      <div {... this.props} className={cn}>
        {this.props.children}
      </div>
    );
  }
});
