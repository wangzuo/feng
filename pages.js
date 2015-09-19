module.exports = function(sitemap) {
  var res = [];

  function renderPage(page, prefix) {
    var subpages = page.pages;
    var component = page.component;

    if(prefix === undefined) { // index page
      res.push({
        dir: '/',
        path: '/',
        html: 'index.html',
        component: component
      });
      // fns.push(build.bind(null, '/', '/', 'index.html', component));
    } else {
      if(subpages && subpages.length) {

        res.push({
          dir: prefix,
          path: `${prefix}/${page.path}`,
          html: `${prefix}/${page.path}/index.html`,
          component: component
        });

        // fns.push(build.bind(null, prefix, `${prefix}/${page.path}`, `${prefix}/${page.path}/index.html`, component));
      } else {
        res.push({
          dir: prefix,
          path: `${prefix}/${page.path}`,
          html: `${prefix}/${page.path}.html`,
          component: component
        });
        // fns.push(build.bind(null, prefix, `${prefix}/${page.path}`, `${prefix}/${page.path}.html`, component));
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
