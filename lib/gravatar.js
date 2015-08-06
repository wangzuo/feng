var React = require('react');
var md5 = require('blueimp-md5');

module.exports = React.createClass({
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
