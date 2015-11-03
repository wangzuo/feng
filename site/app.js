var React = require('react');
var Header = require('./header');
var Footer = require('./footer');
var Nav = require('./nav');
var Grid = require('../react/grid');
var sitemap = require('./map');
var Html = require('./html');
var pages = require('../pages')(sitemap);

module.exports = React.createClass({
  displayName: 'App',

  renderNav() {
    var path = this.props.path;
    var page = pages.filter((p) => (p.path === path))[0];
    if(page.dir === '/') return null;

    var items = pages.filter((p) => (p.dir === page.dir));
    if(items.length <= 1) return nul;

    return (
      <Grid.Column d={3}>
        <Nav
          title={items[0].text}
          className="u-nav u-nav-y"
          items={items.slice(1)}>
        </Nav>
      </Grid.Column>
    );
  },

  render() {
    var path = this.props.path;
    var page = pages.filter((p) => (p.path === path))[0];

    return (
      <Html>
        <div className="app">
          <Header/>

          <Grid.Container>
            <Grid.Row>
              <Grid.Column d={3}>
                <nav className="u-nav u-nav-y">
                  <a href="/css/buttons">buttons</a>
                </nav>
              </Grid.Column>

              <Grid.Column d={9}>
              {this.props.children}
              </Grid.Column>
            </Grid.Row>
          </Grid.Container>
          <Footer/>
        </div>
      </Html>
    );
  }
});
