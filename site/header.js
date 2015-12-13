import { Link } from 'react-router';
var React = require('react');
var Nav = require('./nav');
var pages = require('./pages');

module.exports = React.createClass({
  displayName: 'Header',

  getDefaultProps() {
    return {
      pages: []
    };
  },

  render() {
    var pages = this.props.pages.filter((p) => (p.dir === '/'));
    return (
      <div className="m-header">
        <div className="g-c">
          <h1>
            <Link to="/">feng-ui</Link>
          </h1>
            <Link to="/buttons">button</Link>

          {/*<Nav className="u-nav-x f-fr" items={pages}/>*/}
        </div>
      </div>
    );
  }
});
