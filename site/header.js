var React = require('react');
var Nav = require('./nav');
var Link = require('./link');
var pages = require('./pages');

module.exports = React.createClass({
  displayName: 'Header',

  render() {
    return (
      <div className="m-header">
        <div className="g-c">
          <h1>
            <Link href="/">feng-ui</Link>
          </h1>

          {/*<Nav className="u-nav-x f-fr" items={pages}/>*/}
        </div>
      </div>
    );
  }
});
