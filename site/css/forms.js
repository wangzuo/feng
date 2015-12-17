import React from 'react';
import Simple from './forms-simple.example';
import ErrorField from './forms-error.example';
import Horizontal from './forms-horizontal.example';

const Forms = () => (
  <div>
    <h3>Simple form</h3>
    <Simple/>

    <h3>Error fields</h3>
    <ErrorField/>

    <h3>Horizontal</h3>
    <Horizontal/>
  </div>
);

export default Forms