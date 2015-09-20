module.exports = function(sitemap) {
  var res = [];

  function renderPage(page, prefix) {
    var subpages = page.pages;
    var component = page.component;
    var text = page.text;

    if(prefix === undefined) { // index page
      res.push({
        text: text,
        dir: '/',
        path: '/',
        html: '/index.html',
        component: component
      });
    } else {
      if(subpages && subpages.length) {
        res.push({
          text: text,
          dir: `/${page.path}`,
          path: `${prefix}/${page.path}`,
          html: `${prefix}/${page.path}/index.html`,
          component: component
        });
      } else {
        res.push({
          text: text,
          dir: prefix || '/',
          path: `${prefix}/${page.path}`,
          html: `${prefix}/${page.path}.html`,
          component: component
        });
      }
    }

    if(subpages && subpages.length) {
      var _prefix = prefix === undefined ? '' : (prefix + '/' + page.path);

      subpages.forEach(function(subpage) {
        renderPage(subpage, _prefix);
      });
    }
  }

  renderPage(sitemap);

  return res;
};
