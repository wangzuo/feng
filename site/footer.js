var React = require('react');
var Grid = require('../lib/grid');

module.exports = React.createClass({
  displayName: 'Footer',

  render() {
    var year = new Date().getFullYear();

    return (
      <div className="m-footer">
        <Grid.Container>
          <Grid.Row>
            <Grid.Column d={3}>
              <nav>
                <a href="https://github.com/wangzuo/feng-ui">Github</a>
                <a href="https://npmjs.com/package/feng-ui">NPM</a>
                <a href="#">About</a>
              </nav>
              <div className="leadtext">
                Copyright &copy; 2015 (ISC) License
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid.Container>
      </div>
    );
  }
});