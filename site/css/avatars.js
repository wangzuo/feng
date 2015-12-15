var React = require('react');
var Gravatar = require('./avatars-gravatar.example');
var Sqaure = require('./avatars-square.example');
var Round = require('./avatars-round.example');
var Circle = require('./avatars-circle.example');

module.exports = React.createClass({
  render() {
    return (
      <div>
        <h3>Gravatar</h3>
        <Gravatar/>

        <h3>Sqaure (default)</h3>
        <Sqaure/>

        <h3>Round</h3>
        <Round/>

        <h3>Circle</h3>
        <Circle/>
      </div>
    );
  }
});
