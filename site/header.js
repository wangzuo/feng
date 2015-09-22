var React = require('react');
var Nav = require('./nav');
var Link = require('./link');
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
            <Link href="/">feng-ui</Link>
          </h1>

          {/*<Nav className="u-nav-x f-fr" items={pages}/>*/}
        </div>
      </div>
    );
  }
});
