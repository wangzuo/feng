var React = require('react');
var Header = require('./header');
var Footer = require('./footer');
var Nav = require('./nav');
var Grid = require('../react/grid');

var sections = require('./pages');

var pages = {
  'getting-started': {},
  'react': {
    'feng-form': require('./react/feng-form'),
    tabs: require('./react/tabs'),
    dropdown: require('./react/dropdown'),
    dialogs: require('./react/dialogs')
  },
  css: {
    buttons: require('./css/buttons'),
    forms: require('./css/forms'),
    card: require('./css/card'),
    grid: require('./css/grid'),
    labels: require('./css/labels'),
    typography: require('./css/typography'),
    avatars: require('./css/avatars')
  }
};

var Panel = React.createClass({
  displayName: 'Panel',

  renderPage(section, page) {
    var component = pages[section][page];
    if(!component) throw new Error(`${section}/${page} not found`);

    return React.createElement(component);
  },

  render() {
    var path = this.props.path;
    var ps = path.split('/');
    var section = ps[1];
    var page = ps[2];
    var current = sections.filter((page) => page.path === section)[0];

    return (
      <Grid.Container>
        <Grid.Row>
          <Grid.Column d={3}>
            <Nav
              title={section}
              className="u-nav u-nav-y"
              items={current.pages}
            />
          </Grid.Column>
          <Grid.Column d={9}>
            {this.renderPage(section, page)}
          </Grid.Column>
        </Grid.Row>
      </Grid.Container>
    );
  }
});

module.exports = React.createClass({
  displayName: 'App',

  render() {
    return (
      <div className="app">
        <Header/>
        <Panel path={this.props.path}/>
        <Footer/>
     </div>
    );
  }
});
