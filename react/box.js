import cx from 'classnames';
import blacklist from 'blacklist';
import React from 'react';

class Box extends React.Component {
  renderTitle() {
    if(!this.props.title) return null;

    return (
      <div className="u-box-header f-clearfix">
        <h3>{this.props.title}</h3>
      </div>
    );
  }

  render() {
    var props = blacklist(this.props, 'className', 'center', 'title')
    props.className = cx(
      this.props.className,
      'u-box', 'f-clearfix',
      { 'u-box-center': this.props.center }
    );

    return (
      <div {... props}>
        {this.renderTitle()}
        {this.props.children}
      </div>
    );
  }
}

Box.defaultProps = {
  center: false
};

exports.Box = Box;

exports.BoxHeader = (props) => (
  <div className="u-box-header">
    {props.children}
  </div>
);

exports.BoxContent = (props) => (
  <div className="u-box-content">
    {props.children}
  </div>
);

exports.BoxFooter = (props) => (
  <div className="u-box-footer f-clearfix">
    {props.children}
  </div>
);
