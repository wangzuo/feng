import React from 'react';

class Checkbox extends React.Component {
  render() {
    return (
      <span className="u-checkbox">
        <input type="checkbox"/>
        <span className="label">
          {this.props.children}
        </span>
      </span>
    );
  }
}

module.exports = Checkbox;
