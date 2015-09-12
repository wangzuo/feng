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
require('../postcss/spinner.css');
require('../postcss/slat.css');
require('../postcss/dropdown.css');
require('../postcss/dialog.css');
require('../postcss/avatar.css');
require('./example.css');

var history2 = require('history2');
var React = require('react');
// todo may use haml or sth else
var App = require('./app');

function route(path) {
  React.render(
    <App path={path}></App>,
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
