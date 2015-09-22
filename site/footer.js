var React = require('react');
var Grid = require('../react/grid');
var packageInfo = require('../package.json');

module.exports = React.createClass({
  displayName: 'Footer',

  render() {
    var year = new Date().getFullYear();

    return (
      <Grid.Container>
        <div className="m-footer">
          <Grid.Row>
            <Grid.Column d={12}>
              <nav className="u-nav-x">
                <a href="https://github.com/wangzuo/feng-ui">Github</a>
                <a href="https://npmjs.com/package/feng-ui">NPM</a>
                <a href="#">About</a>
              </nav>
              <b>Ver {packageInfo.version}</b>
              <div className="leadtext">
                Copyright &copy; 2015 (ISC) License
              </div>
            </Grid.Column>
          </Grid.Row>
        </div>
      </Grid.Container>
    );
  }
});
