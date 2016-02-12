import cx from 'classnames';
import blacklist from 'blacklist';
import React from 'react';

module.exports = (props) => {
  var bProps = blacklist(props, 'color');
  var color = props.color;
  bProps.className = cx(
    'u-label',
    color ? `u-label-${color}` : null,
    props.className
  );

  return (
    <span {... bProps}>
      {props.children}
    </span>
  );
};
