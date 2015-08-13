var cx = require('classnames');
var React = require('react');

exports.Tabs = React.createClass({
  displayName: 'Tabs',

  getDefaultProps() {
    return {
      fixed: false,
      alignRight: false
    };
  },

  render() {
    var cn = cx(
      'u-tabs',
      {'u-tabs-fixed': this.props.fixed},
      {'is-right': this.props.alignRight},
      this.props.className
    );

    return (
      <div {... this.props} className={cn}>
        {this.props.children}
      </div>
    );
  }
});

exports.Nav = React.createClass({
  displayName: 'TabsNav',

  render() {
    return (
      <div {... this.props} className="tabs-nav">
        {this.props.children}
      </div>
    );
  }
});

exports.Tab = React.createClass({
  displayName: 'TabsTab',

  render() {
    var cn = cx(
      'tab',
      {'is-active' : this.props.active},
      this.props.className
    );

    return <div {... this.props} className={cn}>{this.props.children}</div>;
  }
});

exports.Contents = React.createClass({
  displayName: 'TabsContents',

  render() {
    return <div {... this.props} className="tabs-contents">{this.props.children}</div>;
  }
});

exports.Content = React.createClass({
  displayName: 'TabsContent',

  render() {
    var cn = cx(
      'tabs-content',
      {'is-active' : this.props.active},
      this.props.className
    );

    return <div {... this.props} className={cn}>{this.props.children}</div>;
  }
});
