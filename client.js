var Client = require('react-engine/lib/client');

require('./site/css/avatars');
require('./site/css/buttons');
require('./site/css/card');
require('./site/css/forms');
require('./site/css/grid');
require('./site/css/index');
require('./site/css/labels');
require('./site/css/typography');
require('./site/getting-started');
require('./site/index');
require('./site/react/dialogs');
require('./site/react/dropdown');
require('./site/react/index');
require('./site/react/markdown');
require('./site/react/tabs');

document.addEventListener('DOMContentLoaded', function onLoad() {
  Client.boot({
    viewResolver: function(viewName) {
      return require('./views/' + viewName);
    }
  });
});