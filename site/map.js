module.exports = {
  component: require('./index'),
  pages: [{
    text: 'Getting started',
    path: 'getting-started',
    component: require('./getting-started')
  }, {
    text: 'CSS',
    path: 'css',
    component: require('./css'),
    pages: [{
      text: 'Grid',
      path: 'grid',
      component: require('./css/grid')
    }, {
      text: 'Typography',
      path: 'typography',
      component: require('./css/typography')
    }, {
      text: 'Buttons',
      path: 'buttons',
      component: require('./css/buttons')
    }, {
      text: 'Labels',
      path: 'labels',
      component: require('./css/labels')
    }, {
      text: 'Forms',
      path: 'forms',
      component: require('./css/forms')
    }, {
      text: 'Card',
      path: 'card',
      component: require('./css/card')
    }, {
      text: 'Avatars',
      path: 'avatars',
      component: require('./css/avatars')
    }]
  }, {
    text: 'React',
    path: 'react',
    component: require('./react'),
    pages: [{
      text: 'Tabs',
      path: 'tabs',
      component: require('./react/tabs')
    }, {
      text: 'Dropdown',
      path: 'dropdown',
      component: require('./react/dropdown')
    }, {
      text: 'Dialog',
      path: 'dialogs',
      component: require('./react/dialogs')
    }, {
      text: 'Markdown',
      path: 'markdown',
      component: require('./react/markdown')
    }, {
      text: 'Feng Form',
      path: 'feng-form',
      component: require('./react/feng-form')
    }]
  }]
};
