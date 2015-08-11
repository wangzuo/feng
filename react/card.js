var cx = require('classnames');
var React = require('react');
var Gravatar = require('./gravatar.js');

module.exports = React.createClass({
  displayName: 'Card',

  getDefaultProps() {
    return {
      link: '#'
    };
  },

  render() {
    return (
      <div className={cx('u-card', this.props.className)}>
        <div className="gradient"></div>
        <img className="img" src={this.props.image}/>
        <div className="text">
          <div className="title">{this.props.title}</div>
          <div className="leadtext">{this.props.leadtext}</div>
          <div className="info">
            <Gravatar className="avatar" email={this.props.authorEmail} size={20}/>
            <span className="author">{this.props.authorName}</span>
            <span className="time">{this.props.time}</span>
          </div>
        </div>
        <span className="label">{this.props.label}</span>
        <a className="link" href={this.props.link}></a>
      </div>
    );
  }
});
