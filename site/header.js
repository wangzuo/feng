var React = require('react');
var Nav = require('../lib/nav');
var pages = require('./pages');

module.exports = React.createClass({
  displayName: 'Header',

  render() {
    return (
      <div className="m-header">
        <div className="g-c">
          <a to="/">feng-ui</a>
          <Nav className="nav" items={pages}/>
        </div>
      </div>
    );
  }
});
