var React = require('react');
var Nav = require('../lib/nav');
var pages = require('./pages');
import {Link} from 'react-router';

module.exports = React.createClass({
  displayName: 'Header',

  render() {
    return (
      <div className="m-header">
        <div className="g-c">
          <Link to="/">feng-ui</Link>
          <Nav className="nav" items={pages}/>
        </div>
      </div>
    );
  }
});
