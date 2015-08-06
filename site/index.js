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

var Nav = require('../lib/nav');

var React = require('react');
var Router = require('react-router');

// todo may use haml or sth else
var pages = require('./pages');

var App = require('./app');

var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Panel = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  render() {
    var path = this.context.router.getCurrentPath();
    var section = path.split('/')[1];
    var current = pages.filter((page) => page.path === section)[0];

    return (
      <div className="g-container">
        <div className="g-r">
          <div className="g-3">
            <Nav className="u-nav u-nav-y"
              items={current.pages}
            />
          </div>
          <div className="g-9">
            <RouteHandler/>
          </div>
        </div>
      </div>
    );
  }
});

var routes = (
  <Route path="/" handler={App}>
    <Route name="getting-started" path="/getting-started" handler={Panel}/>

    <Route name="css" path="/css" handler={Panel}>
      <Route name="grid" path="/css/grid" handler={require('./css/grid')}/>
      <Route name="typography" path="/css/typography" handler={require('./css/typography')}/>
      <Route name="buttons" path="/css/buttons" handler={require('./css/buttons')}/>
      <Route name="labels" path="/css/labels" handler={require('./css/labels')}/>
      <Route name="forms" path="/css/forms" handler={require('./css/forms')}/>
      <Route name="card" path="/css/card" handler={require('./css/card')}/>
      <Route name="tabs" path="/css/tabs" handler={require('./css/tabs')}/>
    </Route>

    <Route name="react" path="/react" handler={Panel}>
      <Route name="feng-form" path="/react/feng-form" handler={require('./react/feng-form')}/>
    </Route>
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
