import blacklist from 'blacklist';
import React from 'react';
import md5 from 'blueimp-md5';

class Gravatar extends React.Component {
  render() {
    var email = this.props.email;
    var size = this.props.size;
    var props = blacklist(this.props, 'email', 'size');
    var hash = md5(email);

    return (
      <img
        {... props}
        src={`http://www.gravatar.com/avatar/${hash}?s=${size}`}
      />
    );
  }
}

module.exports = Gravatar;
