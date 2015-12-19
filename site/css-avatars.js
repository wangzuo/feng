var React = require('react');
var Gravatar = require('../examples/avatars/gravatar.example');
var Sqaure = require('../examples/avatars/square.example');
var Round = require('../examples/avatars/round.example');
var Circle = require('../examples/avatars/circle.example');

module.exports = () => (
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
