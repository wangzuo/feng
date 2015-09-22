var React = require('react');
var Header = require('./header');
var Footer = require('./footer');
var Nav = require('./nav');
var Grid = require('../react/grid');
var sitemap = require('./map');
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
    var component = page.component;

    return (
      <div className="app">
        <Header pages={pages}/>
        <Grid.Container>
          <Grid.Row>
            {this.renderNav()}
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
