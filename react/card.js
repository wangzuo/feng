var cx = require('classnames');
var blacklist = require('blacklist');
var React = require('react');
var Gravatar = require('./gravatar.js');

module.exports = React.createClass({
  displayName: 'Card',

  getDefaultProps() {
    return {
      link: '#'
    };
  },

  renderAuthor() {
    if(this.props.authorEmail) {
      <Gravatar className="avatar" email={this.props.authorEmail} size={20}/>
    } else if(this.props.authorName) {
      <span className="author">{this.props.authorName}</span>
    }

    return null;
  },

  renderLabel() {
    if(this.props.label) {
      <span className="label">{this.props.label}</span>
    }
    return null;
  },

  render() {
    var props = blacklist(this.props, 'className', 'image', 'title',
      'leadtext', 'authorEmail', 'authorName',
      'time', 'label', 'link');
    props.className = cx(this.props.className, 'u-card');

    return (
      <div {... props}>
        <div className="gradient"></div>
        <img className="img" src={this.props.image}/>
        <div className="text">
          <div className="title">{this.props.title}</div>
          <div className="leadtext">{this.props.leadtext}</div>
          <div className="info">
            {this.renderAuthor()}
            <span className="time">{this.props.time}</span>
          </div>
        </div>
        {this.renderLabel()}
        <a className="link" href={this.props.link}></a>
      </div>
    );
  }
});
