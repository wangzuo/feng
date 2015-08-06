var React = require('react');
var md5 = require('blueimp-md5');

var Gravatar = React.createClass({
  displayName: 'Gravatar',

  render() {
    var email = this.props.email;
    var size = this.props.size;
    var hash = md5(email);

    return (
      <img
        {... this.props}
        src={`http://www.gravatar.com/avatar/${hash}?s=${size}`}
      />
    );
  }
});

module.exports = React.createClass({
  displayName: 'Card',

  getDefaultProps() {
    return {
      // todo: responsive image support
      link: '#'
   };
  },

  render() {
    return (
      <div className="u-card">
        <div className="gradient"></div>
        <img className="img" src={this.props.image}/>
        <div className="text">
          <div className="title">{this.props.title}</div>
          <div className="leadtext">{this.props.leadtext}</div>
          <div className="info">
            <Gravatar className="avatar" email={this.props.authorEmail} size={20}/>
            <span className="author">{this.props.authorName}</span> 
            <span className="time">3 days ago</span>
          </div>
        </div>
        <span className="label">{this.props.label}</span>
        <a className="link" href={this.props.link}></a>
      </div>
    );
  }
});
