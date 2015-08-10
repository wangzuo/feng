if(__DEV__) {
  require('../postcss/normalize.css');
  require('../postcss/grid.css');
  require('../postcss/typography.css');
  require('../postcss/button.css');
  require('../postcss/form.css');
  require('../postcss/card.css');
  require('../postcss/functions.css');
  require('../postcss/header.css');
  require('../postcss/nav.css');
  require('../postcss/tab.css');
  require('../postcss/footer.css');
  require('../postcss/label.css');
  require('../postcss/input-slider.css');
  require('../postcss/input-color.css');
  require('../postcss/select.css');
  require('../postcss/switch.css')
  require('../postcss/example.css');
}

var history2 = require('history2');
var React = require('react');
// todo may use haml or sth else
var sections = require('./pages');
var App = require('./app');
var Nav = require('../lib/nav');

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

if(__DEV__) {
  function route(path) {
    React.render(
      <App path={path}><Panel path={path}/></App>,
      document.getElementById('app')
    );
  }

  var path = history2.init({
    mode: 'hashbang',
    basePath: '/site'
  });

  route(path);

  history2.on('change', function(path) {
    route(path);
  });

  document.body.addEventListener('click', function(e) {
    if(e.target.classList.contains('j-link')) {
      e.preventDefault();
      var href = e.target.getAttribute('href');
      route(href);
      history2.change(href);
    }
  });
}

module.exports = function(path) {
  return React.renderToString(<App path={path}><Panel path={path}/></App>);
};
