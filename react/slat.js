var React = require('react');

module.exports = React.createClass({
  displayName: 'Slat',

  render() {
    return (
      <div className="u-slat">
        <img className="img" src={this.props.image}/>
        <div className="title">{this.props.title}</div>
        {this.props.children}
      </div>
    );
  }
});