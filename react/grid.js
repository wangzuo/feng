import cx from 'classnames';
import blacklist from 'blacklist';
import React from 'react';

exports.Container = (props) => {
  var bProps = blacklist(props, 'className', 'children');
  bProps.className = cx('g-c', props.className);

  return (
    <div {... bProps}>
      {props.children}
    </div>
  );
};

exports.Row = (props) => {
  var bProps = blacklist(props, 'className', 'children');
  bProps.className = cx('g-r', props.className);

  return (
    <div {... bProps}>
      {props.children}
    </div>
  );
};

exports.Column = (props) => {
  var bProps = blacklist(props, 'className', 'children', 'd', 't', 'm');
  bProps.className = cx(
    `g-${props.d || 24}`,
    `g-t-${props.t || 24}`,
    `g-m-${props.m || 24}`,
    props.className
  );

  return (
    <div {... bProps}>
      {props.children}
    </div>
  );
};
