var React = require('react');
var Header = require('./header');
var Footer = require('./footer');
var Nav = require('./nav');
var Grid = require('../react/grid');

var sections = require('./pages');

var pages = {
  '/': require('./'),
  'getting-started': require('./getting-started'),
  'react': {
    'index': require('./react/feng-form'),
    'feng-form': require('./react/feng-form'),
    tabs: require('./react/tabs'),
    dropdown: require('./react/dropdown'),
    dialogs: require('./react/dialogs'),
    markdown: require('./react/markdown')
  },
  css: {
    index: require('./css/buttons'),
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

  getPageComponent() {
    var path = this.props.path;

    if(pages[path]) return pages[path];

    var ps = path.split('/');
    if(ps.length === 3) return pages[ps[1]][ps[2]]
    else if(ps.length === 2) return pages[ps[1]]['index'];
  },

  renderNav() {
    var path = this.props.path;
    var ps = path.split('/');

    if(!ps[1]) return null;

    var section = sections.filter(function(s) {
      return s.path === ps[1]
    })[0];

    if(!section) return null;

    return (
      <Nav
        title={section.text}
        className="u-nav u-nav-y"
        section={section}
        pages={section.pages}
      />
    );
  },

  render() {
    var component = this.getPageComponent();

    return (
      <Grid.Container>
        <Grid.Row>
          <Grid.Column d={9}>
            {React.createElement(component)}
          </Grid.Column>
          <Grid.Column d={3}>
            {this.renderNav()}
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
