var React = require('react');
var Header = require('./header');
var Footer = require('./footer');
var Nav = require('./nav');
var Grid = require('../react/grid');

var sitemap = require('./map');
var pages = require('../pages')(sitemap);

module.exports = React.createClass({
  displayName: 'App',

  render() {
    var path = this.props.path;
    var page = pages.filter((p) => (p.path === path))[0];
    var items = pages.filter((p) => (p.dir === page.dir));
    var component = page.component;

    return (
      <div className="app">
        <Header/>
        <Grid.Container>
          <Grid.Row>
            <Grid.Column d={items.length > 1 ? 3 : 0}>
              <Nav
                title={page.dir}
                className="u-nav u-nav-y"
                items={items}>
              </Nav>
            </Grid.Column>
            <Grid.Column d={9}>
              {React.createElement(component)}
            </Grid.Column>
          </Grid.Row>
        </Grid.Container>
        <Footer/>
     </div>
    );
  }
});
