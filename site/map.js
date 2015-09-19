modules.exports = {
  path: '/',
  component: require('./index'),
  pages: [{
    name: 'Getting started',
    path: 'getting-started',
    component: require('./getting-started')
  }, {
    text: 'CSS'
    name: '/css',
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
    pages: [{
      text: 'Tabs',
      path: 'tabs'
    }, {
      text: 'Dropdown',
      path: 'dropdown'
    }, {
      text: 'Dialog',
      path: 'dialogs'
    }, {
      text: 'Markdown',
      path: 'markdown'
    }, {
      text: 'Feng Form',
      path: 'feng-form'
    }]
  }, {
    text: 'About',
    path: 'about'
  }]
};
