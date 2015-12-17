import React from 'react';
import Gravatar from './avatars-gravatar.example';
import Sqaure from './avatars-square.example';
import Round from './avatars-round.example';
import Circle from './avatars-circle.example';

const Avatars = () => (
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

export default Avatars