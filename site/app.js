var React = require('react');
var Header = require('./header');
var Footer = require('./footer');
var Nav = require('../lib/nav');

var sections = require('./pages');

var pages = {
  'getting-started': {},
  'react': {
    'feng-form': require('./react/feng-form')
  },
  css: {
    buttons: require('./css/buttons'),
    forms: require('./css/forms'),
    tabs: require('./css/tabs'),
    card: require('./css/card'),
    grid: require('./css/grid'),
    labels: require('./css/labels'),
    typography: require('./css/typography')
  }
}


var Panel = React.createClass({
  displayName: 'Panel',

  renderPage(section, page) {
    // console.log('renderPage', section, page);
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
      <div className="g-container">
        <div className="g-r">
          <div className="g-3">
            <Nav
              className="u-nav u-nav-y"
              items={current.pages}
            />
          </div>
          <div className="g-9">
            {this.renderPage(section, page)}
          </div>
        </div>
      </div>
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
